/**
 * Apollo Client 配置
 * 包含：
 * 1. HTTP 链接配置
 * 2. 认证中间件
 * 3. 缓存策略
 * 4. 错误处理
 */
import { 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink,
  from,
  ApolloLink 
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// 创建 HTTP 链接
const httpLink = createHttpLink({
  uri: '/graphql',  // 使用相对路径，配合 Vite 代理
});

// 错误处理中间件
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// 认证中间件
const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');
  
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});

// 缓存配置
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        users: {
          // 合并分页数据
          keyArgs: false,
          merge(existing = [], incoming, { args }) {
            if (args?.offset === 0) {
              return incoming;
            }
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

// 创建 Apollo Client 实例
export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
}); 
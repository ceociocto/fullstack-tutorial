/**
 * 认证相关的自定义 Hook
 * 演示：
 * 1. 自定义 Hook 的创建和使用
 * 2. GraphQL Mutation 的使用
 * 3. 状态管理的集成
 * 4. TypeScript 类型推导
 */
import { useMutation, gql } from '@apollo/client';
import { useSetAtom } from 'jotai';
import { userAtom } from '@/stores/auth';
import type { AuthPayload, LoginVariables } from '@/types';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;

export function useAuth() {
  const setUser = useSetAtom(userAtom);
  const [loginMutation, { loading }] = useMutation<
    { login: AuthPayload },
    LoginVariables
  >(LOGIN_MUTATION);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await loginMutation({
        variables: { email, password },
      });

      if (data?.login) {
        const { token, user } = data.login;
        localStorage.setItem('token', token);
        setUser(user);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return {
    login,
    logout,
    loading,
  };
} 
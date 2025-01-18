const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const cors = require('cors');
const schema = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');
const authMiddleware = require('./middleware/auth');

const app = express();

// 启用CORS
app.use(cors());

// 应用认证中间件
app.use((req, res, next) => {
  authMiddleware(req);
  next();
});

app.use(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: resolvers
  })
);

// 添加GraphiQL界面
app.get('/graphiql', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>GraphiQL</title>
        <link href="https://unpkg.com/graphiql/graphiql.min.css" rel="stylesheet" />
      </head>
      <body style="margin: 0;">
        <div id="graphiql" style="height: 100vh;"></div>
        <script crossorigin src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/graphiql/graphiql.min.js"></script>
        <script>
          const fetcher = GraphiQL.createFetcher({
            url: '/graphql',
          });
          ReactDOM.render(
            React.createElement(GraphiQL, { fetcher }),
            document.getElementById('graphiql'),
          );
        </script>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
  console.log(`GraphiQL interface available at http://localhost:${PORT}/graphiql`);
}); 
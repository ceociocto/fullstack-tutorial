# 全栈开发培训项目

基于 React + GraphQL + Spring Boot 的全栈开发培训项目，展示前后端分离架构的最佳实践。

## 快速开始

### 1. 启动后端服务
```bash
cd springboot-backend
./mvnw spring-boot:run
```
后端服务将在 http://localhost:8080 启动

### 2. 启动中台服务
```bash
cd express-graphql-middleware
npm install
npm run dev
```
GraphQL 服务将在 http://localhost:4000/graphql 启动

### 3. 启动前端应用
```bash
cd react-frontend
npm install
npm run dev
```
前端应用将在 http://localhost:3000 启动

## 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0
- Java >= 17
- Maven >= 3.8

## 项目结构
```
fullstack-tutorial/
├── react-frontend/          # React 前端项目
│   ├── src/
│   │   ├── components/      # 可复用组件
│   │   ├── pages/          # 页面组件
│   │   ├── hooks/          # 自定义 Hooks
│   │   ├── stores/         # 状态管理
│   │   ├── graphql/        # GraphQL 配置
│   │   └── types/          # TypeScript 类型
│   └── vite.config.ts      # Vite 配置
├── express-graphql-middleware/  # Express 中台服务
│   ├── src/
│   │   ├── resolvers/      # GraphQL 解析器
│   │   ├── schemas/        # GraphQL Schema
│   │   └── middleware/     # 中间件
│   └── server.js           # 服务器入口
└── springboot-backend/     # Spring Boot 后端服务
     └── src/main/
         ├── java/           # Java 源代码
         └── resources/      # 配置文件
```

## 功能演示

### 1. 用户认证
```
# 测试账号
email: demo@example.com
password: demo123
```

### 2. GraphQL 示例
```graphql
# 查询用户列表
query GetUsers {
  users(offset: 0, limit: 10) {
    id
    name
    email
    role
  }
}

# 用户登录
mutation Login {
  login(email: "demo@example.com", password: "demo123") {
    token
    user {
      id
      name
    }
  }
}
```

### 3. 功能路由
- `/` - 首页：项目概览
- `/users` - 用户列表：GraphQL 查询和无限滚动
- `/state-demo` - 状态管理：Jotai 原子化状态
- `/auth-demo` - 认证演示：JWT 认证流程
- `/code-demo` - 代码展示：函数式编程示例

## 技术栈

### 前端
- React 18 + TypeScript
- Vite + Apollo Client
- MUI + Jotai
- React Router

### 中台
- Express.js + GraphQL
- Apollo Server + JWT

### 后端
- Spring Boot
- Spring Security

## 开发指南

### 后端开发
1. 配置数据库
2. 启动 Spring Boot
3. 验证 API：http://localhost:8080/api

### 中台开发
1. 安装依赖
2. 启动服务
3. 访问 GraphQL Playground：http://localhost:4000/graphql

### 前端开发
1. 安装依赖
2. 启动开发服务器
3. 使用 React DevTools 和 Apollo DevTools 调试

## 常见问题

### 1. 启动问题
- 检查端口占用（3000、4000、8080）
- 验证环境变量
- 确认依赖安装完整

### 2. GraphQL 错误
- 检查 Schema 定义
- 验证查询语法
- 查看服务器日志

### 3. 前端问题
- 清除浏览器缓存
- 检查 Network 请求
- 查看控制台错误

## 学习资源
- [GraphQL 文档](https://graphql.org/learn/)
- [React 文档](https://react.dev)
- [Spring Boot 文档](https://spring.io/projects/spring-boot)

## 许可证
MIT 
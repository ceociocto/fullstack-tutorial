import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        全栈开发培训项目
      </Typography>
      <Stack spacing={2}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            GraphQL 演示
          </Typography>
          <Typography>
            通过用户列表展示 GraphQL 查询、分页加载、缓存管理等功能
          </Typography>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            状态管理
          </Typography>
          <Typography>
            使用 Jotai 实现原子化状态管理，展示性能优化技巧
          </Typography>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            认证系统
          </Typography>
          <Typography>
            JWT认证、路由保护、权限控制的实现方案
          </Typography>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            最佳实践
          </Typography>
          <Typography>
            函数式编程、组件设计、性能优化等前端开发最佳实践
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
} 
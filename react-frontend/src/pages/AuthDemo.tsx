import React from 'react';
import { Box, Paper, Typography, Button, TextField } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';

export default function AuthDemo() {
  const { login, logout, loading } = useAuth();

  const handleLogin = async () => {
    const success = await login('demo@example.com', 'demo123');
    if (success) {
      console.log('登录成功');
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" color="textSecondary">
          演示：
          1. JWT 认证流程
          2. GraphQL Mutation
          3. 状态管理集成
        </Typography>
      </Box>

      <Paper sx={{ p: 3, maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
          登录测试
        </Typography>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="邮箱"
            defaultValue="demo@example.com"
            disabled
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="密码"
            type="password"
            defaultValue="demo123"
            disabled
          />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            onClick={handleLogin}
            disabled={loading}
          >
            登录
          </Button>
          <Button
            variant="outlined"
            onClick={logout}
          >
            登出
          </Button>
        </Box>
      </Paper>
    </Box>
  );
} 
import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import { atom, useAtom } from 'jotai';

// 创建原子状态
const counterAtom = atom(0);
const doubleCountAtom = atom(
  (get) => get(counterAtom) * 2
);

export default function StateDemo() {
  const [count, setCount] = useAtom(counterAtom);
  const [doubleCount] = useAtom(doubleCountAtom);

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" color="textSecondary">
          演示：
          1. Jotai 原子化状态管理
          2. 派生状态
          3. React 重渲染优化
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          计数器: {count}
        </Typography>
        <Typography gutterBottom>
          双倍值: {doubleCount}
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => setCount(c => c + 1)}
          sx={{ mr: 1 }}
        >
          增加
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => setCount(0)}
        >
          重置
        </Button>
      </Paper>
    </Box>
  );
} 
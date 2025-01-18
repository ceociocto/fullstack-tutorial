import React, { useMemo, useCallback, useState } from 'react';
import { Box, Paper, Typography, Button, TextField } from '@mui/material';

// 纯函数示例
const calculateTotal = (numbers: number[]): number => 
  numbers.reduce((sum, num) => sum + num, 0);

// 柯里化示例
const multiply = (a: number) => (b: number) => a * b;

export default function CodeDemo() {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);
  const [input, setInput] = useState('');

  // useMemo 示例
  const total = useMemo(() => calculateTotal(numbers), [numbers]);
  
  // useCallback 示例
  const handleAddNumber = useCallback(() => {
    const num = parseInt(input);
    if (!isNaN(num)) {
      setNumbers(prev => [...prev, num]);
      setInput('');
    }
  }, [input]);

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" color="textSecondary">
          演示：
          1. 函数式编程概念
          2. React Hooks 最佳实践
          3. 性能优化技巧
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          数字列表: [{numbers.join(', ')}]
        </Typography>
        <Typography gutterBottom>
          总和: {total}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <TextField
            label="输入数字"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="number"
          />
          <Button 
            variant="contained" 
            onClick={handleAddNumber}
          >
            添加
          </Button>
        </Box>
        <Typography variant="subtitle2" gutterBottom>
          双倍函数示例 (柯里化):
        </Typography>
        <Typography>
          {`multiply(2)(5) = ${multiply(2)(5)}`}
        </Typography>
      </Paper>
    </Box>
  );
} 
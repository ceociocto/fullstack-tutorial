import React, { useCallback, useRef, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import type { User } from '@/types';

const GET_USERS = gql`
  query GetUsers($offset: Int, $limit: Int) {
    users(offset: $offset, limit: $limit) {
      id
      name
      email
      role
    }
  }
`;

export default function UserList() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  const { data, loading, fetchMore } = useQuery<{ users: User[] }>(GET_USERS, {
    variables: { offset: 0, limit: 10 },
  });

  const handleLoadMore = useCallback(() => {
    if (!loading && data?.users) {
      fetchMore({
        variables: {
          offset: data.users.length,
          limit: 10,
        },
      });
    }
  }, [loading, data?.users, fetchMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 1.0 }
    );

    observerRef.current = observer;

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [handleLoadMore]);

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" color="textSecondary">
          演示：
          1. GraphQL 查询和分页
          2. 无限滚动加载
          3. Apollo Client 缓存
        </Typography>
      </Box>

      {data?.users.map(user => (
        <Card key={user.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{user.name}</Typography>
            <Typography color="textSecondary">{user.email}</Typography>
            <Typography variant="body2">角色: {user.role}</Typography>
          </CardContent>
        </Card>
      ))}

      <Box ref={loadMoreRef} sx={{ textAlign: 'center', py: 2 }}>
        {loading && <CircularProgress />}
      </Box>
    </Box>
  );
} 
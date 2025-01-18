import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import MainLayout from '@/components/layout/MainLayout';

// 懒加载页面组件
const Home = React.lazy(() => import('@/pages/Home'));
const UserList = React.lazy(() => import('@/pages/UserList'));
const StateDemo = React.lazy(() => import('@/pages/StateDemo'));
const AuthDemo = React.lazy(() => import('@/pages/AuthDemo'));
const CodeDemo = React.lazy(() => import('@/pages/CodeDemo'));

export default function AppRoutes() {
  return (
    <MainLayout>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/state-demo" element={<StateDemo />} />
          <Route path="/auth-demo" element={<AuthDemo />} />
          <Route path="/code-demo" element={<CodeDemo />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
} 
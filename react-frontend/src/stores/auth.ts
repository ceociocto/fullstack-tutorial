/**
 * 使用 Jotai 进行状态管理
 * 优点：
 * 1. 轻量级
 * 2. 基于原子化的状态管理
 * 3. 支持异步操作
 * 4. 良好的 TypeScript 支持
 */
import { atom } from 'jotai';
import type { User } from '@/types';

// 创建原子状态
export const userAtom = atom<User | null>(null);
export const isAuthenticatedAtom = atom(
  (get) => get(userAtom) !== null
);

// 派生状态
export const userRoleAtom = atom(
  (get) => get(userAtom)?.role
); 
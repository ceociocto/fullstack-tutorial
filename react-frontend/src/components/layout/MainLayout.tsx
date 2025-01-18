import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Box,
  Typography,
  Container
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const DRAWER_WIDTH = 240;

const MENU_ITEMS = [
  { 
    path: '/', 
    label: '首页', 
    icon: <HomeIcon />,
    description: '项目概览和功能导航'
  },
  { 
    path: '/users', 
    label: '用户列表', 
    icon: <PersonIcon />,
    description: 'GraphQL查询和分页加载示例'
  },
  { 
    path: '/state-demo', 
    label: '状态管理', 
    icon: <StorageIcon />,
    description: 'Jotai原子化状态管理演示'
  },
  { 
    path: '/auth-demo', 
    label: '认证演示', 
    icon: <SecurityIcon />,
    description: 'JWT认证和路由保护'
  },
  { 
    path: '/code-demo', 
    label: '代码展示', 
    icon: <CodeIcon />,
    description: '函数式编程和性能优化'
  }
];

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  const currentItem = MENU_ITEMS.find(item => item.path === location.pathname);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            全栈培训演示
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar /> {/* 为AppBar留出空间 */}
        <List>
          {MENU_ITEMS.map(item => (
            <ListItem 
              key={item.path}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{ 
                color: 'inherit',
                textDecoration: 'none',
                '&.Mui-selected': {
                  backgroundColor: 'action.selected'
                }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText 
                primary={item.label}
                secondary={item.description}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* 为AppBar留出空间 */}
        <Container maxWidth="lg">
          {currentItem && (
            <Box mb={3}>
              <Typography variant="h4" gutterBottom>
                {currentItem.label}
              </Typography>
              <Typography color="textSecondary">
                {currentItem.description}
              </Typography>
            </Box>
          )}
          {children}
        </Container>
      </Box>
    </Box>
  );
} 
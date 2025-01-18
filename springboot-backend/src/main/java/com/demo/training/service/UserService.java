package com.demo.training.service;

import com.demo.training.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final List<User> mockUsers;

    public UserService() {
        // 初始化模拟数据
        mockUsers = new ArrayList<>();
        for (long i = 1; i <= 100; i++) {
            mockUsers.add(new User(
                i,
                "User " + i,
                "user" + i + "@example.com",
                i % 2 == 0 ? "ADMIN" : "USER"
            ));
        }
    }

    public List<User> getUsers(int offset, int limit) {
        return mockUsers.stream()
            .skip(offset)
            .limit(limit)
            .collect(Collectors.toList());
    }

    public User getUserById(Long id) {
        return mockUsers.stream()
            .filter(user -> user.getId().equals(id))
            .findFirst()
            .orElse(null);
    }
} 
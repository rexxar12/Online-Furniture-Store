package com.example.demo.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Credential;
import com.example.demo.entities.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String userId, String password) {
        User user = userRepository.findByUserIdAndPassword(userId, password);
        return user != null;
    }

    public int getUserRole(String userId, String password) {
        User user = userRepository.findByUserIdAndPassword(userId, password);
        if (user != null) {
            return user.getRole();
        }
        return 0;
    }
}




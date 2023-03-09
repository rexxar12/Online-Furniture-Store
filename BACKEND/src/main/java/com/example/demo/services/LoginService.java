package com.example.demo.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService {
    @Autowired
    private LoginRepository userRepository;

    public boolean authenticate(String email, String password) {
    	
        Login user = userRepository.findByEmailAndPassword(email, password);
        return user != null;
    }

    public int getUserRole(String email, String password) {
        Login user = userRepository.findByEmailAndPassword(email, password);
        if (user != null) {
            return user.getRole();
        }
        return 0;
    }
    
    
}




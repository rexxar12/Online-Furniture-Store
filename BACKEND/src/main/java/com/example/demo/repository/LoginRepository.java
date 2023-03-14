package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
    Login findByEmailAndPassword(String email, String password);
    Optional<Login> findByEmail(String email);
    Login save(Login c);
    
    @Query("SELECT l from Login l where l.email= :email")
    Login findEmail(String email);
    
}






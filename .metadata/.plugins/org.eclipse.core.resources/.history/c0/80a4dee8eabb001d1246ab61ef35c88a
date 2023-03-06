package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.Credential;
import com.example.demo.entities.Login;
import com.example.demo.entities.Seller;
import com.example.demo.exceptions.EmailAlreadyExistsException;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.SellerRepository;

@Service
public class SellerService {
    @Autowired
    private SellerRepository sellerRepository;
    @Autowired
    private LoginRepository loginRepository;

    public void registerSeller(Seller seller) throws EmailAlreadyExistsException {
        // Check if the email is already in use
        Optional<Seller> existingSeller = sellerRepository.findByEmail(seller.getEmail());
        if (existingSeller.isPresent()) {
            throw new EmailAlreadyExistsException("Email is already in use");
        }
        seller.setRole(2);
        Login cred=new Login();
        cred.setEmail(seller.getEmail());
        cred.setPassword(seller.getPassword());
        cred.setRole(2);
        // Save the new Seller to the database
        sellerRepository.save(seller);
        loginRepository.save(cred);
    }
}

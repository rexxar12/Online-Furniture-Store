package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Seller;
import com.example.demo.exceptions.EmailAlreadyExistsException;
import com.example.demo.services.SellerService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/sellers")
public class SellerController {
    @Autowired
    private SellerService sellerService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Seller seller) {
        try {
            // Register the new Seller
            sellerService.registerSeller(seller);
        } catch (EmailAlreadyExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        return ResponseEntity.ok("Seller registered successfully");
    }
    
    
    
    @GetMapping("/")
    public List<Seller> getAllSellers() {
        return sellerService.getAllSellers();
    }
    
    @GetMapping("/status/{status}")
    public List<Seller> getSellersByStatus(@PathVariable int status) {
        return sellerService.getSellersByStatus(status);
    }
    
    @PostMapping("/approve/{sid}")
    public void approveSeller(@PathVariable int sid) {
        sellerService.approveSeller(sid);
    }
    
    @PostMapping("/reject/{sid}")
    public void rejectSeller(@PathVariable int sid) {
        sellerService.rejectSeller(sid);
    }
}

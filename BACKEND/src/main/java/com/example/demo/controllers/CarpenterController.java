package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Carpenter;

import com.example.demo.exceptions.EmailAlreadyExistsException;
import com.example.demo.services.CarpenterService;

@CrossOrigin
@RestController
@RequestMapping("/api/carpenters")
public class CarpenterController {
	@Autowired
    public CarpenterService carpenterService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Carpenter carpenter) {
        try {
            // Register the new Seller
        	carpenterService.registerCarpenter(carpenter);
        } catch (EmailAlreadyExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        return ResponseEntity.ok("Carpenter registered successfully");
    }

}

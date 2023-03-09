package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CustomerDTO;
import com.example.demo.entities.Customer;

import com.example.demo.exceptions.EmailAlreadyExistsException;
import com.example.demo.services.CustomerService;


@CrossOrigin
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
	@Autowired
    public CustomerService customerService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody CustomerDTO customer) {
        try {
            // Register the new Seller
        	customerService.registerCustomer(customer);
        } catch (EmailAlreadyExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        return ResponseEntity.ok("Customer registered successfully");
    }
}

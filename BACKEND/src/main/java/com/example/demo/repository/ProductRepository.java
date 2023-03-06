package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Product;
import com.example.demo.entities.Seller;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	
}

package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.CartDTO;
import com.example.demo.entities.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
    Cart findByProductPnameAndCustomerCid(String productName, int cid);
    
    
    List<Cart> findByCustomerCid(int cid);
}

package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Cart;
import com.example.demo.entities.Product;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    public void addToCart(String productName) {
        Product p = productRepository.findByName(productName);
        if (p!=null) {
            
            Cart cart = new Cart();
            cart.setProduct(p);
            cartRepository.save(cart);
        } else {
            System.out.println("Cart error");
        }
    }
    
    
    public void updateCart(int cartId, int quantity) {
        Optional<Cart> cartOptional = cartRepository.findById(cartId);
        if (cartOptional.isPresent()) {
            Cart cart = cartOptional.get();
            cart.setQuantity(quantity);
            cartRepository.save(cart);
        } else {
            System.out.println("card update error");
        }
    }

    // other methods
}

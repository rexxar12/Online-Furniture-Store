package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Order;
import com.example.demo.entities.Product;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.services.OrderService;
import com.example.demo.services.ProductService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private ProductService productService;
	@Autowired
	private ProductRepository productRepository;

	@GetMapping("/0/{cid}")
	public ResponseEntity<List<Order>> getOrdersByCustomerIdAndStatus(@PathVariable("cid") int cid) {
		List<Order> orders = orderRepository.findByCidAndStatus(cid, 0);
		return ResponseEntity.ok().body(orders);
	}
	@GetMapping("/1/{cid}")
	public ResponseEntity<List<Order>> getOrdersByCustomerId(@PathVariable("cid") int cid) {
		List<Order> orders = orderRepository.findByCidAndStatus(cid, 1);
		return ResponseEntity.ok().body(orders);
	}
	
	
	@GetMapping("/seller/{sellerId}/orders")
	public List<Order> getOrdersBySeller(@PathVariable int sellerId) {
		return  orderRepository.findByProduct_Seller_Sid(sellerId);
	}	
	
	@PutMapping("/{orderId}/confirm")
	public ResponseEntity<String> confirmOrder(@PathVariable int orderId) {
	    Optional<Order> optionalOrder = orderRepository.findById(orderId);
	    if (optionalOrder.isPresent()) {
	        Order order = optionalOrder.get();
	        Product product = order.getProduct();
	        int quantity = order.getQuantity();
	        int currentStock = product.getProductDetails().getStock();
	        if (currentStock < quantity) {
	            return ResponseEntity.badRequest().body("Insufficient stock");
	        }
	        product.getProductDetails().setStock(currentStock - quantity);
	        productRepository.save(product);
	        order.setStatus(1);
	        orderRepository.save(order);
	        return ResponseEntity.ok("Order confirmed");
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	
    @GetMapping("/trending")
    public List<Integer> getMostFrequentProductId() {
        return orderRepository.findMostFrequentProductId();
    }


	
	
	
}

package com.example.demo.services;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Cart;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Order;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CartRepository cartRepository;

    public void placeOrder(int customerId,String paymode) {
        List<Cart> cartItems = cartRepository.findByCustomerCid(customerId);
        if (cartItems.isEmpty()) {
            throw new RuntimeException("No items in cart to place order.");
        }
        LocalDate deliveryDate = LocalDate.now().plusDays(7);

        for (Cart cartItem : cartItems) {
            Order order = new Order();
            order.setCustomer(cartItem.getCustomer());
            order.setProduct(cartItem.getProduct());
            order.setQuantity(cartItem.getQuantity());
            order.setStatus(0);
            order.setOrderDate(new Date());
            order.setDeliveryDate(java.sql.Date.valueOf(deliveryDate));
            order.setPayment(paymode);
            orderRepository.save(order);
            cartRepository.delete(cartItem);
        }
    }
    
    
    public List<Order> getOrdersBySellerAndProduct(int sellerId, int productId) {
        return orderRepository.findOrdersBySellerAndProduct(sellerId, productId);
    }
    
    public Order getOrdersByProductId(int productid) {
    	return orderRepository.findByProductId(productid);
    }
    
    
    
}
package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CartDTO;
import com.example.demo.entities.Cart;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Product;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.services.CartService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/cart")
public class CartController {
	@Autowired
	private CartRepository cartRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private ProductRepository productRepository;
    

    @GetMapping("/{cid}/{product_name}")
    public ResponseEntity<Cart> getCartByCustomerIdAndProductId(
            @PathVariable("cid") int cid,
            @PathVariable("product_name") String product_name) {
        
    	
    	
    	Cart exists = cartRepository.findByProductPnameAndCustomerCid(product_name, cid);
    	System.out.println(exists);
        if (exists!=null) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add/{cid}/{product_name}/{wood}")
    public ResponseEntity<Cart> addProductToCart(
    @PathVariable("cid") int cid,
    @PathVariable("product_name") String product_name,
    @PathVariable("wood") String wood) {
    	
    	Cart cart=new Cart();
    	Product p=productRepository.findByName(product_name);
    	Customer c= customerRepository.findByCid(cid);
    	p.setWood(wood);
    	cart.setProduct(p);
    	cart.setCustomer(c);
    	cartRepository.save(cart);
    	
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    
    @GetMapping("/{cid}")
    public ResponseEntity<List<CartDTO>> getCartItemsByCustomerId(@PathVariable("cid") int customerId) {
        List<Cart> carts = cartRepository.findByCustomerCid(customerId);
        if (!carts.isEmpty()) {
            List<CartDTO> cartDTOs = new ArrayList<>();
            for (Cart cart : carts) {
                Product product = cart.getProduct();
                int quantity = cart.getQuantity();
                long price = product.getProductDetails().getPrice();
                double total = price * quantity;
                int cart_id=cart.getId();
                cartDTOs.add(new CartDTO(cart_id,product.getPname(), price, quantity, total));
            }
            return new ResponseEntity<>(cartDTOs, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @PutMapping("/update/{cid}/{cartId}/{quantity}")
    public ResponseEntity<Cart> updateCartQuantity(@PathVariable("cartId") int cartId,
                                                    @PathVariable("quantity") int quantity) {
        Optional<Cart> optionalCart = cartRepository.findById(cartId);
        if (optionalCart.isPresent()) {
            Cart cart = optionalCart.get();
            cart.setQuantity(quantity);
            cartRepository.save(cart);
            return new ResponseEntity<>( HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    
    
    
    
}

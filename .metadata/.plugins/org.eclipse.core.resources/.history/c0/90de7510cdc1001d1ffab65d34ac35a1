package com.example.demo.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.SellerDTO;
import com.example.demo.entities.Category;
import com.example.demo.entities.City;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Product;
import com.example.demo.entities.ProductDetails;
import com.example.demo.entities.Seller;
import com.example.demo.exceptions.EmailAlreadyExistsException;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.services.CityService;
import com.example.demo.services.ProductService;
import com.example.demo.services.SellerService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/sellers")
public class SellerController {
    @Autowired
    private SellerService sellerService;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private CustomerRepository customerRepository;
    
    
    
    
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody SellerDTO seller) {
    	try {
    		// Register the new Seller
    		
    		sellerService.registerSeller(seller);
    	} catch (EmailAlreadyExistsException e) {
    		return ResponseEntity.badRequest().body(e.getMessage());
    	}
    	
    	return ResponseEntity.ok("Seller registered successfully");
    }
    
    
    @Autowired
    private  ProductService productService;

 
    

    @PostMapping(value = "/addproducts", consumes = { "multipart/form-data" })
    public Product addProduct(@ModelAttribute Product product, @RequestParam("image") MultipartFile image, @RequestParam("sellerId") int sellerId, @RequestParam("length") int length, @RequestParam("width") int width, @RequestParam("height") int height, @RequestParam("price") long price, @RequestParam("stock") int stock,@RequestParam("category_id") int category_id) throws IOException {
        
        
    	ProductDetails productDetails = new ProductDetails();
        productDetails.setLength(length);
        productDetails.setWidth(width);
        productDetails.setHeight(height);
        productDetails.setPrice(price);
        productDetails.setStock(stock);
        product.setProductDetails(productDetails);
        Product newProduct = productService.addProduct(product, image, sellerId,category_id);
        return newProduct;
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
    
    
    @GetMapping("/customer-details")
    public ResponseEntity<Customer> getCustomerDetails(@RequestParam("email") String email) {
        Customer customer = customerRepository.findByEmailid(email);

        if (customer != null) {
            return ResponseEntity.ok(customer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
}

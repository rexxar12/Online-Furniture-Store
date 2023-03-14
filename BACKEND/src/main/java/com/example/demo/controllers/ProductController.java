package com.example.demo.controllers;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.ProductDTO;
import com.example.demo.entities.Product;
import com.example.demo.entities.Seller;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.services.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/c/search")
    public List<ProductDTO> searchByCategoryName(@RequestParam String categoryName) {
        List<Product> products = productService.searchByCategoryName(categoryName);
        List<ProductDTO> responses = new ArrayList<>();
        for (Product product : products) {
            ProductDTO response = new ProductDTO();
            response.setProductImage(product.getProductImage());
            response.setPname(product.getPname());
            response.setDescription(product.getDescription());
            response.setPrice(product.getProductDetails().getPrice());
            if(product.getProductDetails().getStock()>0) {
            	response.setStock("In Stock");
            }else
            {
            	response.setStock("Out of Stock");
            }
            response.setSeller(product.getSeller());
            response.setCategory(product.getCategory());
            responses.add(response);
        }
        return responses;
    }
    
    @GetMapping("/p/search")
    public Product searchByProductName(@RequestParam String productName) {
    	Product products = productRepository.findByName(productName);
    	ProductDTO response=new ProductDTO();
    	response.setPid(products.getPid());
    	response.setPname(products.getPname());
    	response.setDescription(products.getDescription());
    	
    	response.setProductImage(products.getProductImage());
    	
    	    	
    	response.setCategory(products.getCategory());
    	response.setSeller(products.getSeller());
    	return products;
    }
    

    @GetMapping("/seller/{sellerId}/products/low-stock")
    public List<Product> getLowStockProducts(@PathVariable int sellerId) {
      return productRepository.findLowStockProductsBySellerId(sellerId);
    }
    
    @GetMapping("/trendingProducts")
    public List<Product> getTrendingProducts() {
        List<Integer> trendingProductIds = orderRepository.findMostFrequentProductId();
        
        List<Product> trendingProducts = new ArrayList<>();
        for (Integer productId : trendingProductIds) {
            Optional<Product> product = productRepository.findById(productId);
            product.ifPresent(trendingProducts::add);
        }

        return trendingProducts;
    }
    
    
}
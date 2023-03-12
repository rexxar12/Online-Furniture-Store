package com.example.demo.services;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Category;
import com.example.demo.entities.Product;
import com.example.demo.entities.Seller;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.SellerRepository;



@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final SellerRepository sellerRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    public ProductService(ProductRepository productRepository, SellerRepository sellerRepository) {
        this.productRepository = productRepository;
        this.sellerRepository = sellerRepository;
    }

    public Product addProduct(Product product, MultipartFile image, int sellerId,int category_id) throws IOException {
        Seller seller = sellerRepository.findById(sellerId).orElseThrow(() -> new RuntimeException("Seller not found"));
        Category c= categoryRepository.findByCategory_Id(category_id);
        product.setCategory(c);
        product.setSeller(seller);

        if (!image.isEmpty()) {
            product.setProductImage(image.getBytes());
        }
        
        Product newProduct = productRepository.save(product);
        return newProduct;
    }
    
   
    public List<Product> searchByCategoryName(String categoryName) {
        return productRepository.findByCategory(categoryName);
    }
    
    public List<Product> getProductsBySellerId(int sellerId) {
        return productRepository.findBySid(sellerId);
    }

}


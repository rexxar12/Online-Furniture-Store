package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Product;
import com.example.demo.entities.Seller;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Modifying
    @Transactional
    @Query(value = "INSERT INTO products (pname, description, product_image, seller_id) VALUES (:pname, :description, :productImage, :sellerId)", nativeQuery = true)
    void save(@Param("pname") String pname, @Param("description") String description, @Param("productImage") byte[] productImage, @Param("sellerId") int sellerId);

    @Query("SELECT p FROM Product p JOIN Category c ON p.category = c.category_id WHERE c.category = :category")
    List<Product> findByCategory(@Param("category") String category);
	
    @Query("Select p from Product p where p.pname = :name ")
    Product findByName(String name);
    
    @Query("Select p from Product p where sid= :sid")
    List<Product> findBySid(int sid);
    
    @Query("SELECT p FROM Product p WHERE p.seller.sid = :sellerId AND p.productDetails.stock < 100")
    List<Product> findLowStockProductsBySellerId(int sellerId);
    
    
}

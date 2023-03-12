package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
	
	@Query("SELECT o from Order o where cid= :cid and status= :status")
	List<Order> findByCidAndStatus(int cid, int status);
	
	 @Query("SELECT o FROM Order o INNER JOIN o.product p WHERE p.seller.id = :sellerId AND o.product.id = :productId")
	 List<Order> findOrdersBySellerAndProduct(@Param("sellerId") int sellerId, @Param("productId") int productId);
	 
	 @Query("SELECT o FROM Order o where product_id= :productid")
	 Order findByProductId(int productid);
	 
	 List<Order> findByProduct_Seller_Sid(int sellerId);
	 
	 @Query(value = "SELECT product_id FROM orders GROUP BY product_id ORDER BY COUNT(*) DESC", nativeQuery = true)
	 List<Integer> findMostFrequentProductId();
	
}


package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.CustomerDTO;
import com.example.demo.dto.SellerDTO;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Seller;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	 Optional<Customer> findByEmail(String email);
	 Customer save(Customer c);
	 
	 @Query("SELECT c.cid FROM Customer c WHERE c.email = :email")
	    Integer findCidByEmail(String email);
	 
	 @Query("SELECT c from Customer c where c.cid= :cid")
	 Customer findByCid(int cid);
	 
	 @Query("SELECT c from Customer c where c.email= :email")
	 Customer findByEmailid(String email);
}

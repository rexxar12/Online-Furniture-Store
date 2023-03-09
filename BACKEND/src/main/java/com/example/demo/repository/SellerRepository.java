package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.SellerDTO;
import com.example.demo.entities.Seller;


@Transactional
@Repository
public interface SellerRepository extends JpaRepository<Seller, Integer>{
	    Optional<Seller> findByEmail(String email);
	    SellerDTO save(SellerDTO s);
	    List<Seller> findByStatus(int status);
	    void deleteBySid(int sid);
	    
	    @Query("SELECT s.sid FROM Seller s WHERE s.email = :email")
	    Integer findSidByEmail(String email);
	    @Query("SELECT s.status FROM Seller s WHERE s.email = :email")
	    Integer findStatusByEmail(String email);
	    
	    
	    
	    
	    
}

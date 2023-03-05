package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Carpenter;

@Repository
public interface CarpenterRepository extends JpaRepository<Carpenter, Integer> {
	 Optional<Carpenter> findByEmail(String email);
	    Carpenter save(Carpenter c);
}

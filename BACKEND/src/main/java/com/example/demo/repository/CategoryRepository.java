package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	
	
	
	@Query("Select c from Category c where c.category_id= :category_id ")
	Category findByCategory_Id(int category_id);
}

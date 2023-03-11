package com.example.demo.entities;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int  category_id;

    @Column(name = "category")
    private String category;
    
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> products = new ArrayList<>();
    
    //getter setter
    
    
    
    
	public List<Product> getProducts() {
		return products;
	}

	@Override
	public String toString() {
		return "Category [category_id=" + category_id + ", category=" + category + "]";
	}

	public Category() {
		
	}
	
	@JsonIgnore
	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}
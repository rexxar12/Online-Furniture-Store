package com.example.demo.entities;

import java.util.Arrays;

import javax.persistence.CascadeType;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;




@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pid;
    private String pname;
    private String description;
    @Lob
    private byte[] productImage;
   
	@ManyToOne
    @JoinColumn(name = "sid")
    private Seller seller;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    
    @OneToOne(cascade = CascadeType.ALL)
    private ProductDetails productDetails;
    

	public void setWood(String wood) {
    	this.productDetails.setWood(wood);
    }
    
    public String getWood() {
    	return this.productDetails.getWood();
    }
    
    
    // constructors, getters and setters
    
    @Override
	public String toString() {
		return "Product [pid=" + pid + ", pname=" + pname + ", description=" + description + ",  seller=" + seller.getSid() + ", category=" + category.getCategory_id() + "]";
	}

	public ProductDetails getProductDetails() {
		return productDetails;
	}

	public void setProductDetails(ProductDetails productDetails) {
		this.productDetails = productDetails;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Product() {
		
    }
    
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public byte[] getProductImage() {
		return productImage;
	}
	public void setProductImage(byte[] productImage) {
		this.productImage = productImage;
	}
	public Seller getSeller() {
		return seller;
	}
	public void setSeller(Seller seller) {
		this.seller = seller;
	}
    
    
}

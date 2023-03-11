package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Order {
		@Id
		@GeneratedValue(strategy =  GenerationType.IDENTITY)
		private int id;
		
		private int cart_id;
		
		
}

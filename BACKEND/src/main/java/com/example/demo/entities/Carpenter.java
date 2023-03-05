package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="carpenter")
public class Carpenter {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int carpid;
	@Column(name="fname")
	String fname;
	@Column
	String lname;
	@Column
	String email;
	@Column
	String password;
	@Column
	String contact;
	@Column(name="area_id")
	int area;
	@Column
	String address;
	@Column
	int status;
	
	@Column
	String gstno;
	
	
	@Column(name="role_id")
	int role;

	public int getCarpid() {
		return carpid;
	}

	public void setCarpid(int carpid) {
		this.carpid = carpid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public int getArea() {
		return area;
	}

	public void setArea(int area) {
		this.area = area;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getGstno() {
		return gstno;
	}

	public void setGstno(String gstno) {
		this.gstno = gstno;
	}

	public int getRole() {
		return role;
	}

	public void setRole(int role) {
		this.role = role;
	}
	

}

package com.example.demo.dto;


public class LoginResponse {
    private int id;
    private String role;
    private int status;

    public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public LoginResponse(int id, String role,int status) {
        this.id = id;
        this.role = role;
        this.status=status;
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

    
}

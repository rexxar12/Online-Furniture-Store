package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.CustomerDTO;
import com.example.demo.entities.City;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;

import com.example.demo.exceptions.EmailAlreadyExistsException;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.LoginRepository;

@Service
public class CustomerService {
	 @Autowired
	    private CustomerRepository customerRepository;
	    @Autowired
	    private LoginRepository loginRepository;
	    @Autowired
	    private CityService cityService;

	    public void registerCustomer(CustomerDTO customer) throws EmailAlreadyExistsException {
	        // Check if the email is already in use
	        Optional<Customer> existingcustomer = customerRepository.findByEmail(customer.getEmail());
	        if (existingcustomer.isPresent()) {
	            throw new EmailAlreadyExistsException("Email is already in use");
	        }
	        City city = cityService.getCityById(customer.getCity_id());
	        Customer c=new Customer();
	        c.setCity(city);
	        c.setAddress(customer.getAddress());
	        c.setContact(customer.getContact());
	        c.setEmail(customer.getEmail());
	        c.setPassword(customer.getPassword());
	        c.setFname(customer.getFname());
	        c.setLname(customer.getLname());
	        Login cred=new Login();
	        cred.setEmail(customer.getEmail());
	        cred.setPassword(customer.getPassword());
	        cred.setRole(4);
	        cred.setStatus(1);
	        // Save the new Customer to the database
	        customerRepository.save(c);
	        loginRepository.save(cred);
	    }

}

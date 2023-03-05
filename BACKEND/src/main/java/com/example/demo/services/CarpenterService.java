package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Carpenter;
import com.example.demo.entities.Login;
import com.example.demo.exceptions.EmailAlreadyExistsException;
import com.example.demo.repository.CarpenterRepository;
import com.example.demo.repository.LoginRepository;
@Service
public class CarpenterService {
	 @Autowired
	    private CarpenterRepository carpenterRepository;
	    @Autowired
	    private LoginRepository loginRepository;

	    public void registerCarpenter(Carpenter carpenter) throws EmailAlreadyExistsException {
	        // Check if the email is already in use
	        Optional<Carpenter> existingcarpenter = carpenterRepository.findByEmail(carpenter.getEmail());
	        if (existingcarpenter.isPresent()) {
	            throw new EmailAlreadyExistsException("Email is already in use");
	        }
	        
	        Login cred=new Login();
	        cred.setEmail(carpenter.getEmail());
	        cred.setPassword(carpenter.getPassword());
	        cred.setRole(3);
	       
	        carpenterRepository.save(carpenter);
	        loginRepository.save(cred);
	    }

}

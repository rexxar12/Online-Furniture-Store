package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.City;
import com.example.demo.repository.CityRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cities")
public class CityController {
    
    @Autowired
    private CityRepository cityRepository;
    
    @GetMapping
    public List<City> getAllCities() {
        List<City> cities = cityRepository.findAll();
        return cities;
    }
    
    // other controller methods, if any
}
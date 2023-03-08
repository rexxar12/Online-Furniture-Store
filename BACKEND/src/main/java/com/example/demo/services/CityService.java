package com.example.demo.services;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.City;
import com.example.demo.repository.CityRepository;


@Service
public class CityService {
	@Autowired
	private CityRepository cityRepository;
	
	public City getCityById(int city_id) {
		return cityRepository.findOneByCityId(city_id);
	}
}

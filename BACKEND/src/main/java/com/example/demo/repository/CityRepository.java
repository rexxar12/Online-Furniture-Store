package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.City;

public interface CityRepository extends JpaRepository<City, Integer> {
	@Query("SELECT c FROM City c WHERE c.city_id = :cityId")
    public City findOneByCityId(@Param("cityId") Integer cityId);
}

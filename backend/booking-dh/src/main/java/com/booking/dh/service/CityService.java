package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.City;
import com.booking.dh.repository.CityRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityService {

    static final Logger logger = Logger.getLogger(CityService.class);

    @Autowired
    CityRepository cityRepository;

    public City createCity(City city) {
        return cityRepository.save(city);
    }

    public Optional<City> readCityById(Long id) throws ResourceNotFoundException {
        Optional<City> city = cityRepository.findById(id);
        if (city.isPresent()){
            return city;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current city.");
        }
    }

    public List<City> readAll() {
        return cityRepository.findAll();
    }

    public City updateCity(City city) throws ResourceNotFoundException {
        if(city.getId() != null && readCityById(city.getId()).isPresent()){
            return cityRepository.save(city);
        }else{
            throw new ResourceNotFoundException("City does not exist.");
        }
    }

    public void deleteCity(Long id) throws ResourceNotFoundException {
        readCityById(id).get();
        logger.info("The city with id " + id + " has been successfully deleted.");
        cityRepository.deleteById(id);
    }

}

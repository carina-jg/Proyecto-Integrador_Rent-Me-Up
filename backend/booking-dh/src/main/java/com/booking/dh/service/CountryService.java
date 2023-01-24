package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Country;
import com.booking.dh.repository.CountryRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    static final Logger logger = Logger.getLogger(CountryService.class);

    @Autowired
    CountryRepository countryRepository;

    public Country createCountry(Country country) {
        return countryRepository.save(country);
    }

    public Optional<Country> readCountryById(Long id) throws ResourceNotFoundException {
        Optional<Country> country = countryRepository.findById(id);
        if (country.isPresent()){
            return country;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current country.");
        }
    }

    public List<Country> readAll() {
        return countryRepository.findAll();
    }

    public Country updateCountry(Country country) throws ResourceNotFoundException {
        if(country.getId() != null && readCountryById(country.getId()).isPresent()){
            return countryRepository.save(country);
        }else{
            throw new ResourceNotFoundException("Country does not exist.");
        }
    }

    public void deleteCountry(Long id) throws ResourceNotFoundException {
        readCountryById(id).get();
        logger.info("The country with id " + id + " has been successfully deleted.");
        countryRepository.deleteById(id);
    }
}

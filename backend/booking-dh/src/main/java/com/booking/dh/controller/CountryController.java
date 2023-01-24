package com.booking.dh.controller;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Country;
import com.booking.dh.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    CountryService countryService;

    @PostMapping("/add")
    public ResponseEntity<Country> addCountry(@RequestBody Country country) {
        return ResponseEntity.ok(countryService.createCountry(country));
    }

    @GetMapping
    public ResponseEntity<List<Country>> listCountries(){
        return ResponseEntity.ok(countryService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Country> updateCountry(@RequestBody Country country) throws ResourceNotFoundException {
        return ResponseEntity.ok(countryService.updateCountry(country));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCountry(@PathVariable Long id) throws ResourceNotFoundException {
        countryService.deleteCountry(id);
        return ResponseEntity.ok("Country successfully removed.");
    }
}

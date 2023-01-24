package com.booking.dh.controller;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.City;
import com.booking.dh.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    CityService cityService;

    @PostMapping("/add")
    public ResponseEntity<City> addCity(@RequestBody City city) {
        return ResponseEntity.ok(cityService.createCity(city));
    }

    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping
    public ResponseEntity<List<City>> listCities(){
        return ResponseEntity.ok(cityService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<City> updateCity(@RequestBody City city) throws ResourceNotFoundException {
        return ResponseEntity.ok(cityService.updateCity(city));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCity(@PathVariable Long id) throws ResourceNotFoundException {
        cityService.deleteCity(id);
        return ResponseEntity.ok("City successfully removed.");
    }
}

package com.booking.dh.controller;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Characteristic;
import com.booking.dh.service.CharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/characteristics")
public class CharacteristicController {

    @Autowired
    CharacteristicService characteristicService;

    @PostMapping("/add")
    public ResponseEntity<Characteristic> addCharacteristic(@RequestBody Characteristic characteristic) {
        return ResponseEntity.ok(characteristicService.createCharacteristic(characteristic));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Characteristic> findCharacteristicById(@PathVariable Long id) throws ResourceNotFoundException  {
        return ResponseEntity.ok(characteristicService.readCharacteristicById(id).get());
    }

    @GetMapping
    public ResponseEntity<List<Characteristic>> listCharacteristics(){
        return ResponseEntity.ok(characteristicService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Characteristic> updateCharacteristic(@RequestBody Characteristic characteristic) throws ResourceNotFoundException {
        return ResponseEntity.ok(characteristicService.updateCharacteristic(characteristic));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCharacteristic(@PathVariable Long id) throws ResourceNotFoundException {
        characteristicService.deleteCharacteristic(id);
        return ResponseEntity.ok("Characteristic successfully removed.");
    }
}

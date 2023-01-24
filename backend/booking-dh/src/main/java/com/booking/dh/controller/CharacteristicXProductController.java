package com.booking.dh.controller;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.CharacteristicXProduct;
import com.booking.dh.service.CharacteristicXProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product-characteristics")
public class CharacteristicXProductController {

    @Autowired
    CharacteristicXProductService characteristicXProductService;

    @PostMapping("/add")
    public ResponseEntity<CharacteristicXProduct> addProductCharacteristic(@RequestBody CharacteristicXProduct characteristicXProduct) {
        return ResponseEntity.ok(characteristicXProductService.createCharacteristicXProduct(characteristicXProduct));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CharacteristicXProduct> findProductCharacteristicById(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(characteristicXProductService.readCharacteristicXProductById(id).get());
    }

    @GetMapping
    public ResponseEntity<List<CharacteristicXProduct>> listProductCharacteristics(){
        return ResponseEntity.ok(characteristicXProductService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<CharacteristicXProduct> updateProductCharacteristic(@RequestBody CharacteristicXProduct characteristicXProduct) throws ResourceNotFoundException {
        return ResponseEntity.ok(characteristicXProductService.updateCharacteristicXProduct(characteristicXProduct));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProductCharacteristic(@PathVariable Long id) throws ResourceNotFoundException {
        characteristicXProductService.deleteCharacteristicXProduct(id);
        return ResponseEntity.ok("Product characteristic successfully removed.");
    }
}

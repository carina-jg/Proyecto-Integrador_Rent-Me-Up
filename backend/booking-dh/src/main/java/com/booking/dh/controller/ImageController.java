package com.booking.dh.controller;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Image;
import com.booking.dh.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    ImageService imageService;

    @PostMapping("/add")
    public ResponseEntity<Image> addImage(@RequestBody Image image) {
        return ResponseEntity.ok(imageService.createImage(image));
    }

    @GetMapping
    public ResponseEntity<List<Image>> listImages(){
        return ResponseEntity.ok(imageService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Image> updateImage(@RequestBody Image image) throws ResourceNotFoundException {
        return ResponseEntity.ok(imageService.updateImage(image));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable Long id) throws ResourceNotFoundException {
        imageService.deleteImage(id);
        return ResponseEntity.ok("Image successfully removed.");
    }
}

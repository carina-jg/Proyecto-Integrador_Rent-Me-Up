package com.booking.dh.controller;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Product;
import com.booking.dh.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        return ResponseEntity.ok(productService.addProduct(product));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.findProductById(id).get());
    }

    @GetMapping("/list")
    public ResponseEntity<List<Product>> listProducts() {
        return ResponseEntity.ok(productService.productsList());
    }

    @GetMapping
    public ResponseEntity<List<Product>> randomProducts() {
        return ResponseEntity.ok(productService.randomProductsList());
    }

    @GetMapping("/dates/{startDate}/{endDate}")
    public ResponseEntity<List<Product>> findProductByDates(@PathVariable("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate, @PathVariable("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
        return ResponseEntity.ok(productService.findByDates(startDate, endDate));
    }

    /*
    @GetMapping("/city-dates/{id}/{checkInDate}/{checkOutDate}")
    public ResponseEntity<List<Product>> findProductByCityAndDates(@PathVariable Long id, @PathVariable("checkInDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkInDate, @PathVariable("checkOutDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOutDate ) {
        return ResponseEntity.ok(productService.findByCityAndDates(id, checkInDate, endDate));
    }
     */

    @GetMapping("/city-dates")
    public ResponseEntity<?> findProductByCityAndDates(@RequestParam (value="city_id", required=false) Long city_id, @RequestParam (value="checkInDate", required=false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkInDate, @RequestParam (value="checkOutDate", required=false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOutDate) throws ResourceNotFoundException {
        if ((checkInDate == null && checkOutDate != null && city_id != null) || (checkInDate != null && checkOutDate == null && city_id != null)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Check-in/check-out date must both be specified or null.");
        }
        if (checkInDate == null && checkOutDate == null && city_id != null) {
            return ResponseEntity.ok(productService.findProductByCityId(city_id));
        }
        if (checkInDate != null && checkOutDate != null && city_id == null) {
            return ResponseEntity.ok(productService.findByDates(checkInDate, checkOutDate));
        }
        if (checkInDate == null && checkOutDate == null && city_id == null){
            return ResponseEntity.ok(productService.randomProductsList());
        }
        if (checkInDate != null && checkOutDate != null && city_id != null) {
            if (checkOutDate.isBefore(checkInDate)) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Check-out date cannot be earlier than check-in date.");
            }
            if (checkInDate.isBefore(LocalDate.now())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Check-in date cannot be earlier than today.");
            }
        }
        return ResponseEntity.ok(productService.findByCityAndDates(city_id, checkInDate, checkOutDate));
    }

    @GetMapping("/city/{id}")
    public ResponseEntity<List<Product>> findProductByCityId(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.findProductByCityId(id));
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<Product>> findProductByCategoryId(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.findProductByCategoryId(id));
    }


    @PutMapping("/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.editProduct(product));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) throws ResourceNotFoundException {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product successfully removed.");
    }
    
}

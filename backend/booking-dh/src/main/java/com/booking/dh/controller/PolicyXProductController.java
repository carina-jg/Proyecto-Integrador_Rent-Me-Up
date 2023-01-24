package com.booking.dh.controller;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.PolicyXProduct;
import com.booking.dh.service.PolicyXProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product-polices")
public class PolicyXProductController {

    @Autowired
    PolicyXProductService policyXProductService;

    @PostMapping("/add")
    public ResponseEntity<PolicyXProduct> addProductPolicy(@RequestBody PolicyXProduct policyXProduct) {
        return ResponseEntity.ok(policyXProductService.createPolicyXProduct(policyXProduct));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PolicyXProduct> findProductPolicyById(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(policyXProductService.readPolicyXProductById(id).get());
    }

    @GetMapping
    public ResponseEntity<List<PolicyXProduct>> listProductPolices(){
        return ResponseEntity.ok(policyXProductService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<PolicyXProduct> updateProductPolicy(@RequestBody PolicyXProduct policyXProduct) throws ResourceNotFoundException {
        return ResponseEntity.ok(policyXProductService.updatePolicyXProduct(policyXProduct));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProductPolicy(@PathVariable Long id) throws ResourceNotFoundException {
        policyXProductService.deletePolicyXProduct(id);
        return ResponseEntity.ok("Product policy successfully removed.");
    }
}

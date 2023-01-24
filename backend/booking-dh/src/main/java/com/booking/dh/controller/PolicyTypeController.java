package com.booking.dh.controller;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.PolicyType;
import com.booking.dh.service.PolicyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/policy-types")
public class PolicyTypeController {

    @Autowired
    PolicyTypeService policyTypeService;

    @PostMapping("/add")
    public ResponseEntity<PolicyType> addPolicyType(@RequestBody PolicyType policyType) {
        return ResponseEntity.ok(policyTypeService.createPolicyType(policyType));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PolicyType> findPolicyTypeById(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(policyTypeService.readPolicyTypeById(id).get());
    }

    @GetMapping
    public ResponseEntity<List<PolicyType>> listPolicyTypes(){
        return ResponseEntity.ok(policyTypeService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<PolicyType> updatePolicyType(@RequestBody PolicyType policyType)throws ResourceNotFoundException {
        return ResponseEntity.ok(policyTypeService.updatePolicyType(policyType));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePolicyType(@PathVariable Long id) throws ResourceNotFoundException {
        policyTypeService.deletePolicyType(id);
        return ResponseEntity.ok("Policy type successfully removed.");
    }
}

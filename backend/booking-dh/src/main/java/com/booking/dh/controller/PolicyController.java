package com.booking.dh.controller;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Policy;
import com.booking.dh.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/policies")
public class PolicyController {

    @Autowired
    PolicyService policyService;

    @PostMapping("/add")
    public ResponseEntity<Policy> addPolicy(@RequestBody Policy policy) {
        return ResponseEntity.ok(policyService.createPolicy(policy));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Policy> findPolicyById(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(policyService.readPolicyById(id).get());
    }

    @GetMapping
    public ResponseEntity<List<Policy>> listPolicies(){
        return ResponseEntity.ok(policyService.readAll());
    }

    @PutMapping("/update")
    public ResponseEntity<Policy> updatePolicy(@RequestBody Policy policy) throws ResourceNotFoundException {
        return ResponseEntity.ok(policyService.updatePolicy(policy));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePolicy(@PathVariable Long id) throws ResourceNotFoundException {
        policyService.deletePolicy(id);
        return ResponseEntity.ok("Policy successfully removed.");
    }
}

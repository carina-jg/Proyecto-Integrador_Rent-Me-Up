package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Policy;
import com.booking.dh.repository.PolicyRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyService {

    static final Logger logger = Logger.getLogger(PolicyService.class);

    @Autowired
    PolicyRepository policyRepository;

    public Policy createPolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    public Optional<Policy> readPolicyById(Long id) throws ResourceNotFoundException {
        Optional<Policy> policy = policyRepository.findById(id);
        if (policy.isPresent()){
            return policy;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current policy.");
        }
    }

    public List<Policy> readAll() {
        return policyRepository.findAll();
    }

    public Policy updatePolicy(Policy policy) throws ResourceNotFoundException {
        if(policy.getId() != null && readPolicyById(policy.getId()).isPresent()){
            return policyRepository.save(policy);
        }else{
            throw new ResourceNotFoundException("Policy does not exist.");
        }
    }

    public void deletePolicy(Long id) throws ResourceNotFoundException {
        readPolicyById(id).get();
        logger.info("The policy with id " + id + " has been successfully deleted.");
        policyRepository.deleteById(id);
    }
}

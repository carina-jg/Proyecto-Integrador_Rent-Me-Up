package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.PolicyType;
import com.booking.dh.repository.PolicyTypeRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyTypeService {

    static final Logger logger = Logger.getLogger(PolicyTypeService.class);

    @Autowired
    PolicyTypeRepository policyTypeRepository;

    public PolicyType createPolicyType(PolicyType policyType) {
        return policyTypeRepository.save(policyType);
    }

    public Optional<PolicyType> readPolicyTypeById(Long id) throws ResourceNotFoundException {
        Optional<PolicyType> policyType = policyTypeRepository.findById(id);
        if (policyType.isPresent()){
            return policyType;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current policy type.");
        }
    }

    public List<PolicyType> readAll() {
        return policyTypeRepository.findAll();
    }

    public PolicyType updatePolicyType(PolicyType policyType) throws ResourceNotFoundException {
        if(policyType.getId() != null && readPolicyTypeById(policyType.getId()).isPresent()){
            return policyTypeRepository.save(policyType);
        }else{
            throw new ResourceNotFoundException("Policy type does not exist.");
        }
    }

    public void deletePolicyType(Long id) throws ResourceNotFoundException {
        readPolicyTypeById(id).get();
        logger.info("The policy type with id " + id + " has been successfully deleted.");
        policyTypeRepository.deleteById(id);
    }
}

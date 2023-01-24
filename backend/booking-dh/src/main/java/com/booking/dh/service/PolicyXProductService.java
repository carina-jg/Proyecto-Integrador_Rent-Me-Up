package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.PolicyXProduct;
import com.booking.dh.repository.PolicyXProductRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyXProductService {

    static final Logger logger = Logger.getLogger(PolicyXProductService.class);

    @Autowired
    PolicyXProductRepository policyXProductRepository;

    public PolicyXProduct createPolicyXProduct(PolicyXProduct policyXProduct) {
        return policyXProductRepository.save(policyXProduct);
    }

    public Optional<PolicyXProduct> readPolicyXProductById(Long id) throws ResourceNotFoundException {
        Optional<PolicyXProduct> policyXProduct = policyXProductRepository.findById(id);
        if (policyXProduct.isPresent()){
            return policyXProduct;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current product policy.");
        }
    }

    public List<PolicyXProduct> readAll() {
        return policyXProductRepository.findAll();
    }

    public PolicyXProduct updatePolicyXProduct(PolicyXProduct policyXProduct) throws ResourceNotFoundException {
        if(policyXProduct.getId() != null && readPolicyXProductById(policyXProduct.getId()).isPresent()){
            return policyXProductRepository.save(policyXProduct);
        }else{
            throw new ResourceNotFoundException("Policy product does not exist.");
        }
    }

    public void deletePolicyXProduct(Long id) throws ResourceNotFoundException {
        readPolicyXProductById(id).get();
        logger.info("The product policy with id " + id + " has been successfully deleted.");
        policyXProductRepository.deleteById(id);
    }

}

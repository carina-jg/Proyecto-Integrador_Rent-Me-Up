package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.CharacteristicXProduct;
import com.booking.dh.repository.CharacteristicXProductRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacteristicXProductService {

    static final Logger logger = Logger.getLogger(CharacteristicXProductService.class);

    @Autowired
    CharacteristicXProductRepository characteristicXProductRepository;

    public CharacteristicXProduct createCharacteristicXProduct(CharacteristicXProduct characteristicXProduct) {
        return characteristicXProductRepository.save(characteristicXProduct);
    }

    public Optional<CharacteristicXProduct> readCharacteristicXProductById(Long id) throws ResourceNotFoundException {
        Optional<CharacteristicXProduct> characteristicXProduct = characteristicXProductRepository.findById(id);
        if (characteristicXProduct.isPresent()){
            return characteristicXProduct;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current product characteristic.");
        }
    }

    public List<CharacteristicXProduct> readAll() {
        return characteristicXProductRepository.findAll();
    }

    public CharacteristicXProduct updateCharacteristicXProduct(CharacteristicXProduct characteristicXProduct) throws ResourceNotFoundException {
        if(characteristicXProduct.getId() != null && readCharacteristicXProductById(characteristicXProduct.getId()).isPresent()){
            return characteristicXProductRepository.save(characteristicXProduct);
        }else{
            throw new ResourceNotFoundException("Product characteristic does not exist.");
        }
    }

    public void deleteCharacteristicXProduct(Long id) throws ResourceNotFoundException {
        readCharacteristicXProductById(id).get();
        logger.info("The product characteristic with id " + id + " has been successfully deleted.");
        characteristicXProductRepository.deleteById(id);
    }
}

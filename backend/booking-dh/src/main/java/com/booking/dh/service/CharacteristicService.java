package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Characteristic;
import com.booking.dh.repository.CharacteristicRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacteristicService {

    static final Logger logger = Logger.getLogger(CharacteristicService.class);

    @Autowired
    CharacteristicRepository characteristicRepository;

    public Characteristic createCharacteristic(Characteristic characteristic) {
        return characteristicRepository.save(characteristic);
    }

    public Optional<Characteristic> readCharacteristicById(Long id) throws ResourceNotFoundException {
        Optional<Characteristic> characteristic = characteristicRepository.findById(id);
        if (characteristic.isPresent()){
            return characteristic;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current characteristic.");
        }
    }

    public List<Characteristic> readAll() {
        return characteristicRepository.findAll();
    }

    public Characteristic updateCharacteristic(Characteristic characteristic) throws ResourceNotFoundException {
        if(characteristic.getId() != null && readCharacteristicById(characteristic.getId()).isPresent()){
            return characteristicRepository.save(characteristic);
        }else{
            throw new ResourceNotFoundException("Characteristic does not exist.");
        }
    }

    public void deleteCharacteristic(Long id) throws ResourceNotFoundException {
        readCharacteristicById(id).get();
        logger.info("The characteristic with id " + id + " has been successfully deleted.");
        characteristicRepository.deleteById(id);
    }
}

package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Image;
import com.booking.dh.repository.ImageRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    static final Logger logger = Logger.getLogger(ImageService.class);

    @Autowired
    ImageRepository imageRepository;

    public Image createImage(Image image) {
        return imageRepository.save(image);
    }

    public Optional<Image> readImageById(Long id) throws ResourceNotFoundException {
        Optional<Image> image = imageRepository.findById(id);
        if (image.isPresent()){
            return image;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current image.");
        }
    }

    public List<Image> readAll() {
        return imageRepository.findAll();
    }

    public Image updateImage(Image image) throws ResourceNotFoundException {
        if(image.getId() != null && readImageById(image.getId()).isPresent()){
            return imageRepository.save(image);
        }else{
            throw new ResourceNotFoundException("Image does not exist.");
        }
    }

    public void deleteImage(Long id) throws ResourceNotFoundException {
        readImageById(id).get();
        logger.info("The image with id " + id + " has been successfully deleted.");
        imageRepository.deleteById(id);
    }
}

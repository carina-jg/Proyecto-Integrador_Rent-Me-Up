package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Category;
import com.booking.dh.repository.CategoryRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    static final Logger logger = Logger.getLogger(CategoryService.class);

    @Autowired
    CategoryRepository categoryRepository;

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Optional<Category> readCategoryById(Long id) throws ResourceNotFoundException {
        Optional<Category> category = categoryRepository.findById(id);
        if (category.isPresent()){
            return category;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current category.");
        }
    }

    public List<Category> readAll() {
        return categoryRepository.findAll();
    }

    public Category updateCategory(Category category) throws ResourceNotFoundException {
        if(category.getId() != null && readCategoryById(category.getId()).isPresent()){
            return categoryRepository.save(category);
        }else{
            throw new ResourceNotFoundException("Category does not exist.");
        }
    }

    public void deleteCategory(Long id) throws ResourceNotFoundException {
        readCategoryById(id).get();
        logger.info("The category with id " + id + " has been successfully deleted.");
        categoryRepository.deleteById(id);
    }

}

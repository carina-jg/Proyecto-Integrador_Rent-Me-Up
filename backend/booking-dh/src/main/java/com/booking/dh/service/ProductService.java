package com.booking.dh.service;

import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Product;
import com.booking.dh.repository.ProductRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class ProductService {

    static final Logger logger = Logger.getLogger(ProductService.class);

    @Autowired
    ProductRepository productRepository;

    public Product addProduct (Product product){
        return productRepository.save(product);
    }

    public Optional<Product> findProductById(Long id) throws ResourceNotFoundException  {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()){
            return product;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current product.");
        }
    }

    public List<Product> findProductByCityId(Long id) throws ResourceNotFoundException {
        List<Product> productsByCity = productRepository.findProductByCityId(id);
        if (!productsByCity.isEmpty()){
            return productsByCity;
        }else{
            throw new ResourceNotFoundException("City id " + id + " does not correspond to any current product.");
        }
    }

    public List<Product> findProductByCategoryId(Long id) throws ResourceNotFoundException {
        List<Product> productsByCategory = productRepository.findProductByCategoryId(id);
        if (!productsByCategory.isEmpty()){
            return productsByCategory;
        }else{
            throw new ResourceNotFoundException("Category id " + id + " does not correspond to any current product.");
        }
    }

    public List<Product> productsList(){
        return productRepository.findAll();
    }

    /*
    public List<Product> randomProductList(){
        List<Product> list = productRepository.findAll();
        Collections.shuffle(list);
        return list;
    }
     */

    public List<Product> randomProductsList(){
        return productRepository.randomProducts();
    }

    public List<Product> findByCityAndDates(Long id, LocalDate wantedCheckInDate, LocalDate wantedCheckOutDate) {
        List<Product> productsList = productRepository.findProductsByCityAndDates(id, wantedCheckInDate, wantedCheckOutDate);
        return productsList;
    }

    public List<Product> findByDates(LocalDate wantedCheckInDate, LocalDate wantedCheckOutDate) {
        List<Product> productsList = productRepository.findProductsByDates(wantedCheckInDate, wantedCheckOutDate);
        return productsList;
    }

    public Product editProduct(Product product) throws ResourceNotFoundException {
        if(product.getId() != null && findProductById(product.getId()).isPresent()){
            return productRepository.save(product);
        }else{
            throw new ResourceNotFoundException("Product does not exist.");
        }
    }

    public void deleteProduct(Long id) throws ResourceNotFoundException {
        findProductById(id).get();
        logger.info("The product with id " + id + " has been successfully deleted.");
        productRepository.deleteById(id);
    }
}

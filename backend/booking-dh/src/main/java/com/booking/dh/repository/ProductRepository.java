package com.booking.dh.repository;

import com.booking.dh.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findProductByCityId(Long id);
    List<Product> findProductByCategoryId(Long id);

    @Query(value = "SELECT * FROM products ORDER BY rand() LIMIT 40;", nativeQuery = true)
    List<Product> randomProducts();

    @Query(value = "SELECT * FROM products p WHERE p.id NOT IN(SELECT bookings.product_id FROM bookings INNER JOIN products ON (bookings.product_id = products.id) WHERE (?1 BETWEEN bookings.check_in_date AND bookings.check_out_date) OR (?2 BETWEEN bookings.check_in_date AND bookings.check_out_date));", nativeQuery = true)
    List<Product> findProductsByDates(LocalDate wantedCheckInDate, LocalDate wantedCheckOutDate);

    @Query(value = "SELECT * FROM products p WHERE p.city_id= ?1 AND p.id NOT IN(SELECT bookings.product_id FROM bookings INNER JOIN products ON (bookings.product_id = products.id) WHERE (products.city_id= ?1) AND (?2 BETWEEN bookings.check_in_date AND bookings.check_out_date) OR (?3 BETWEEN bookings.check_in_date AND bookings.check_out_date));", nativeQuery = true)
    List<Product> findProductsByCityAndDates(Long id, LocalDate wantedCheckInDate, LocalDate wantedCheckOutDate);

}

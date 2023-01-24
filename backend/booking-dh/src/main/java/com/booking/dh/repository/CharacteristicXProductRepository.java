package com.booking.dh.repository;

import com.booking.dh.model.CharacteristicXProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacteristicXProductRepository extends JpaRepository<CharacteristicXProduct, Long> {
}

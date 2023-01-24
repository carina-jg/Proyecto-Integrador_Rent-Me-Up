package com.booking.dh.repository;

import com.booking.dh.model.PolicyXProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyXProductRepository extends JpaRepository<PolicyXProduct, Long> {
}

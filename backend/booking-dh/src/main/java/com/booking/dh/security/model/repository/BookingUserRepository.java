package com.booking.dh.security.model.repository;

import com.booking.dh.security.model.BookingUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookingUserRepository extends JpaRepository<BookingUser, Long> {
    boolean existsByEmail(String email);
    Optional<BookingUser> findByEmail(String email);
}

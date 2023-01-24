package com.booking.dh.repository;

import com.booking.dh.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findBookingsByProductId(Long id);

    List<Booking> findBookingsByBookingUserId(Long id);

}

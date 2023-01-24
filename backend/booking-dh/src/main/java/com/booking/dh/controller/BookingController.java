package com.booking.dh.controller;

import com.booking.dh.exceptions.BadRequestException;
import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Booking;
import com.booking.dh.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingService bookingService;

    @PostMapping("/add")
    public ResponseEntity<?> createBooking(@RequestBody Booking booking) throws BadRequestException {
        return ResponseEntity.ok(bookingService.saveBooking(booking));
    }

    @GetMapping
    public ResponseEntity<List<Booking>> listBookings(){
        return ResponseEntity.ok(bookingService.findAll());
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<List<Booking>> findBookingsByProductId(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(bookingService.findBookingsByProductId(id));
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Booking>> findBookingsByUserId(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(bookingService.findBookingsByUserId(id));
    }

    @PutMapping("/update")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking) throws ResourceNotFoundException {
        return ResponseEntity.ok(bookingService.updateBooking(booking));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long id) throws ResourceNotFoundException {
        bookingService.deleteBooking(id);
        return ResponseEntity.ok("Booking successfully removed.");
    }
}

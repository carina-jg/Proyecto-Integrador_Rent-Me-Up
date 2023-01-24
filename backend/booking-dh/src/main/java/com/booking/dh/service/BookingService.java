package com.booking.dh.service;

import com.booking.dh.exceptions.BadRequestException;
import com.booking.dh.exceptions.ResourceNotFoundException;
import com.booking.dh.model.Booking;
import com.booking.dh.repository.BookingRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class BookingService {

    static final Logger logger = Logger.getLogger(BookingService.class);

    @Autowired
    BookingRepository bookingRepository;

    public Booking saveBooking (Booking booking) throws BadRequestException {
        if (booking.getCheckOutDate().isBefore(booking.getCheckInDate())){
            throw new BadRequestException("Check-out date cannot be earlier than check-in date.");
        }
        if (booking.getCheckInDate().isBefore(LocalDate.now())){
            throw new BadRequestException("Check-in date cannot be earlier than today.");
        }
        Collection<Booking> notAvailable = findNotAvailable(booking.getCheckInDate(), booking.getCheckOutDate());
        for (Booking notAvailableBooking: notAvailable) {
            if (notAvailableBooking.getProduct().getId() == booking.getProduct().getId()){
                throw new BadRequestException("This product is not available between selected dates.");
            }
        }
        logger.info("Booking successfully saved.");
        return bookingRepository.save(booking);
    }

    public Optional<Booking> findBookingById(Long id) throws ResourceNotFoundException {
        Optional<Booking> booking = bookingRepository.findById(id);
        if (booking.isPresent()){
            return booking;
        }else{
            throw new ResourceNotFoundException("The id " + id + " does not correspond to any current booking.");
        }
    }

    public List<Booking> findBookingsByProductId(Long id) throws ResourceNotFoundException {
        List<Booking> bookingsByProduct = bookingRepository.findBookingsByProductId(id);
        if (!bookingsByProduct.isEmpty()){
            return bookingsByProduct;
        }else{
            throw new ResourceNotFoundException("Product id " + id + " does not correspond to any current booking.");
        }
    }

    public List<Booking> findBookingsByUserId(Long id) throws ResourceNotFoundException {
        List<Booking> bookingsByUser = bookingRepository.findBookingsByBookingUserId(id);
        if (!bookingsByUser.isEmpty()){
            return bookingsByUser;
        }else{
            throw new ResourceNotFoundException("User id " + id + " does not correspond to any current booking.");
        }
    }

    public Collection<Booking> findNotAvailable(LocalDate checkInDate, LocalDate checkOutDate) {
        Collection<Booking> bookings = bookingRepository.findAll();
        Set<Booking> notAvailable = new HashSet<>();
        for (Booking booking : bookings) {
            if (booking.getCheckInDate().isBefore(checkOutDate) && booking.getCheckOutDate().isAfter(checkInDate)) {
                notAvailable.add(booking);
            }
            if (booking.getCheckInDate().isEqual(checkOutDate) || booking.getCheckOutDate().isEqual(checkInDate)) {
                notAvailable.add(booking);
            }
        }
        return notAvailable;
    }

    public List<Booking> findAll() {
        return bookingRepository.findAll();
    }

    public Booking updateBooking (Booking booking) throws ResourceNotFoundException {
        if(booking.getId() != null && findBookingById(booking.getId()).isPresent()){
            logger.info("Booking successfully updated.");
            return bookingRepository.save(booking);
        }else{
            throw new ResourceNotFoundException("Booking does not exist.");
        }
    }

    public void deleteBooking (Long id) throws ResourceNotFoundException{
        findBookingById(id).get();
        logger.info("The booking with id " + id + " has been successfully deleted.");
        bookingRepository.deleteById(id);
    }
}

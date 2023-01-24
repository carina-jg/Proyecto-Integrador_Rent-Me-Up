package com.booking.dh.security.service;

import com.booking.dh.security.model.BookingUser;
import com.booking.dh.security.model.repository.BookingUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingUserService implements UserDetailsService{

    @Autowired
    BookingUserRepository bookingUserRepository;

    public BookingUser createUser (BookingUser bookingUser) {
        return bookingUserRepository.save(bookingUser);
    }

    public Optional<BookingUser> readUserById(Long id){
        return bookingUserRepository.findById(id);
    }

    public List<BookingUser> readAll() {
        return bookingUserRepository.findAll();
    }

    public void deleteUser(Long id) {
        bookingUserRepository.deleteById(id);
    }

    public boolean existsByEmail(String email){
        return bookingUserRepository.existsByEmail(email);
    }

    public Optional<BookingUser> findByEmail(String email) {
        return bookingUserRepository.findByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return bookingUserRepository.findByEmail(email).orElseThrow((() -> new UsernameNotFoundException("user email not found")));
    }
}

/*
package com.booking.dh.security.service;

import com.booking.dh.security.model.BookingUser;
import com.booking.dh.security.repository.BookingUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private BookingUserService bookingUserService;

    @Autowired
    private BookingUserRepository bookingUserRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        BookingUser user = bookingUserService.findByEmail(email).get();
        return (UserDetails) user;
    }
}


 */
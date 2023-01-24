package com.booking.dh.controller.security.controller;

import com.booking.dh.exceptions.BadRequestException;
import com.booking.dh.security.JWTUtil;
import com.booking.dh.security.enums.RoleName;
import com.booking.dh.security.model.*;
import com.booking.dh.security.service.BookingUserService;
import com.booking.dh.security.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    BookingUserService bookingUserService;
    @Autowired
    RoleService roleService;

    @Autowired
    JWTUtil jwtUtil;

    @PostMapping(path = "/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody BookingUser registerBookingUser) throws BadRequestException {
        if (bookingUserService.existsByEmail(registerBookingUser.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
        }
        BookingUser bookingUser = new BookingUser(registerBookingUser.getName(), registerBookingUser.getLastName(), registerBookingUser.getEmail(), passwordEncoder.encode(registerBookingUser.getPassword()));
        Role role = new Role();
        if (registerBookingUser.getRole().getId() == 1) {
            role = roleService.findByName(String.valueOf(RoleName.client)).get();
        } else if (registerBookingUser.getRole().getId() == 2) {
            role = roleService.findByName(String.valueOf(RoleName.admin)).get();
        } else {
            throw new BadRequestException("Role id must be 1 or 2");
        }
        bookingUser.setRole(role);
        bookingUserService.createUser(bookingUser);
        return ResponseEntity.status(HttpStatus.CREATED).body("User successfully created");
    }

    @PostMapping(path = "/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody AuthenticationRequest request) {
        Map<String, Object> response = new HashMap<>();

        try {
            Authentication a =authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(a);
            UserDetails userDetails = bookingUserService.loadUserByUsername(request.getEmail());
            String jwt = jwtUtil.generateToken(a,userDetails);
            JwtContainer jwtContainer = new JwtContainer(jwt, "Bearer", userDetails.getUsername(), userDetails.getAuthorities());
            response.put("respuesta", jwtContainer);
            //user = (Optional<BookingUser>) authentication.getPrincipal();
            return ResponseEntity.ok(response);

        } catch (BadCredentialsException e) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }
}
package com.booking.dh.security.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class AuthenticationResponse {
    private String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }
}
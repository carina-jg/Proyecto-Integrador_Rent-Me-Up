package com.booking.dh.security.model;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter

public class AuthenticationRequest {
    private String email;
    private String password;
}

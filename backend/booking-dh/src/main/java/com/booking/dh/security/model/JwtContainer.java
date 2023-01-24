package com.booking.dh.security.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtContainer {
    private String token;
    private String bearer;
    private String username;
    private Collection<? extends GrantedAuthority> authorities;

}

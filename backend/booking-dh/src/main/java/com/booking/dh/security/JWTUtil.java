package com.booking.dh.security;


import com.booking.dh.security.model.BookingUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWTUtil {

    private static final String KEY = "mG9\\n2,^obBu[8n.~MpVzbB5tHnuYF<KRE/LnQrQ<q@]wQP46vo^x{3vEN?3uN/E";
    int expiration =3600;

    public String generateToken(Authentication auth,UserDetails us) {
        BookingUser user = (BookingUser) auth.getPrincipal();
        Map<String,Object>claims = new HashMap<>();
        claims.put("user",us);
        claims.put("name",user.getName());
        claims.put("lastName",user.getLastName());
        UserDetails u = (UserDetails) auth.getPrincipal();
        String jwt= Jwts .builder().setSubject(u.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+expiration*1000))
                .addClaims(claims)
                .signWith(SignatureAlgorithm.HS256,KEY).compact();
        return jwt;
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        return userDetails.getUsername().equals(extractUsername(token)) && !isTokenExpired(token);
    }

    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    public Boolean isTokenExpired(String token) {
        return getClaims(token).getExpiration().before(new Date());
    }

    @Deprecated
    private Claims getClaims(String token) {
        return Jwts.parser().setSigningKey(KEY).parseClaimsJws(token).getBody();
    }



}

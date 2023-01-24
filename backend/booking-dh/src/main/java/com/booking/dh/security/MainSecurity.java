package com.booking.dh.security;

import com.booking.dh.security.filter.JwtFilterRequest;
import com.booking.dh.security.service.BookingUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class MainSecurity extends WebSecurityConfigurerAdapter{


    @Autowired
    private BookingUserService bookingUserService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private JwtFilterRequest jwtFilterRequest;

    @Autowired
    private JwtEntryPoint jwtEntryPoint;

    @Bean
    public PasswordEncoder passwordEncoder() {return new BCryptPasswordEncoder();}

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(bookingUserService).passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST,"/auth/**").permitAll()
                .antMatchers(HttpMethod.GET, "/products/**", "/categories/**"
                        , "/cities/**", "/characteristics/**", "/policies/**", "/product-characteristics/**"
                        , "/product-polices/**", "/policy-types/**", "/images/**", "/countries/**"
                ).permitAll()
                .antMatchers(HttpMethod.POST, "/products/**", "/categories/**"
                        , "/cities/**", "/characteristics/**", "/policies/**", "/product-characteristics/**"
                        , "/product-polices/**", "/policy-types/**", "/images/**", "/countries/**").hasAnyAuthority("admin")
                .antMatchers(HttpMethod.PUT, "/products/**", "/categories/**"
                        , "/cities/**", "/characteristics/**", "/policies/**", "/product-characteristics/**"
                        , "/product-polices/**", "/policy-types/**", "/images/**", "/countries/**").hasAnyAuthority("admin")
                .antMatchers(HttpMethod.DELETE, "/products/**", "/categories/**"
                        , "/cities/**", "/characteristics/**", "/policies/**", "/product-characteristics/**"
                        , "/product-polices/**", "/policy-types/**", "/images/**", "/countries/**").hasAnyAuthority("admin")
                .antMatchers(HttpMethod.POST, "/bookings/**").hasAnyAuthority("client", "admin")
                .antMatchers(HttpMethod.PUT, "/bookings/**").hasAnyAuthority("client", "admin")
                .antMatchers(HttpMethod.DELETE, "/bookings/**").hasAnyAuthority("client", "admin")
                .antMatchers(HttpMethod.GET, "/bookings/**").hasAnyAuthority("client", "admin")
                //.anyRequest().permitAll()
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtEntryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtFilterRequest, UsernamePasswordAuthenticationFilter.class);
    }
}

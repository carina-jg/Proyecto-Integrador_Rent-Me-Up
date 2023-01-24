package com.booking.dh.model;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertTrue;

@SpringBootTest
public class CountryTest {

    @Test
    public void createObjectCountry() {
        Country country = new Country("Argentina");

        assertTrue(country != null);
        assertTrue(!country.getName().isEmpty());
    }
}

package com.booking.dh.model;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertTrue;

@SpringBootTest
public class CityTest {

    @Test
    public void createObjectCityWithCountry() {
        Country country = new Country("Argentina");
        City city = new City("Buenos Aires", country);

        assertTrue(city.getCountry() != null);
    }
}

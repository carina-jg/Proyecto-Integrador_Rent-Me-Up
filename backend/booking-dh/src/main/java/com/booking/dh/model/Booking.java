package com.booking.dh.model;

import com.booking.dh.security.model.BookingUser;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Setter
@Getter
@ToString

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="check_in_time", nullable = false)
    @JsonFormat(pattern="HH:mm")
    LocalTime checkInTime;

    @Column(name="check_in_date", nullable = false)
    @JsonFormat(pattern="yyyy-MM-dd")
    LocalDate checkInDate;

    @Column(name="check_out_date", nullable = false)
    @JsonFormat(pattern="yyyy-MM-dd")
    LocalDate checkOutDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JsonIncludeProperties({"id"})
    @JoinColumn(name = "booking_user_id", referencedColumnName = "id", nullable = false)
    private BookingUser bookingUser;

    public Booking() {
    }

    public Booking(LocalTime checkInTime, LocalDate checkInDate, LocalDate checkOutDate, Product product, BookingUser bookingUser) {
        this.checkInTime = checkInTime;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.product = product;
        this.bookingUser = bookingUser;
    }
}
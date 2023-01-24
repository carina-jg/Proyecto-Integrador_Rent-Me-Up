package com.booking.dh.security.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Setter
@Getter
@ToString

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;

    /*
    @JsonIgnoreProperties({"role"})
    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<BookingUser> bookingUsers = new HashSet<>();
     */

    public Role() {
    }

    public Role(String name) {
        this.name = name;
    }
}

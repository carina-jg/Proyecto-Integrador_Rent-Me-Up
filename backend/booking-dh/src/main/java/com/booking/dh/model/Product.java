package com.booking.dh.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@ToString

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String description;
    @Column(name = "main_picture_url", nullable = false)
    private String mainPictureUrl;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private Double longitude;
    @Column(nullable = false)
    private Double latitude;
    @Column(nullable = false)
    private Double price;

    @JsonIgnoreProperties({"product"})
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<CharacteristicXProduct> characteristicsXProducts = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @JsonIgnoreProperties({"product"})
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Image> images = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @JsonIgnoreProperties({"product"})
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    Set<PolicyXProduct> policiesXProducts = new HashSet<>();

    @JsonIgnoreProperties({"product"})
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Booking> bookings = new HashSet<>();

    public Product() {
    }

    public Product(String title, String description, String mainPictureUrl, String address, Double longitude, Double latitude, Double price, Set<CharacteristicXProduct> characteristicsXProducts, Category category, Set<Image> images, City city, Set<PolicyXProduct> policiesXProducts) {
        this.title = title;
        this.description = description;
        this.mainPictureUrl = mainPictureUrl;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.price = price;
        this.characteristicsXProducts = characteristicsXProducts;
        this.category = category;
        this.images = images;
        this.city = city;
        this.policiesXProducts = policiesXProducts;
    }
}

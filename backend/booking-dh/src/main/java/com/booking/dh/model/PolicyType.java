package com.booking.dh.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "policy_types")
public class PolicyType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "policyType", fetch = FetchType.LAZY)
    private Set<Policy> policies = new HashSet<>();

    public PolicyType() {
    }

    public PolicyType(String name, Set<Policy> policies) {
        this.name = name;
        this.policies = policies;
    }
}

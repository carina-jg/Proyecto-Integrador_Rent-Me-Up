package com.booking.dh.security.service;

import com.booking.dh.security.model.Role;
import com.booking.dh.security.model.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Role createRole (Role role) {
        return roleRepository.save(role);
    }

    public Optional<Role> readRoleById(Long id){
        return roleRepository.findById(id);
    }

    public List<Role> readAll() {
        return roleRepository.findAll();
    }

    public void deleteRole(Long id) {
        roleRepository.deleteById(id);
    }

    public Optional<Role> findByName(String roleName) {return roleRepository.findByName(roleName);}
}

package com.namefurme.service;

import com.namefurme.dao.PetDao;
import com.namefurme.model.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class PetServiceImpl implements PetService {

    private final PetDao petDao;

    @Autowired
    public PetServiceImpl(PetDao petDao) {
        this.petDao = petDao;
    }

    @Override
    public List<Pet> findAll() {
        try {
            return petDao.findAll();
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching all pets.", e);
        }
    }

    @Override
    public Pet findById(Long id) {
        try {
            return petDao.findById(id);
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching pet by ID.", e);
        }
    }

    @Override
    public Pet create(Pet pet) {
        try {
            return petDao.create(pet);
        } catch (SQLException e) {
            throw new RuntimeException("Error creating pet.", e);
        }
    }

    @Override
    public boolean delete(Pet pet) {
        try {
            return petDao.delete(pet);
        } catch (SQLException e) {
            throw new RuntimeException("Error deleting pet.", e);
        }
    }

    @Override
    public boolean deleteById(Long id) {
        try {
            return petDao.deleteById(id);
        } catch (SQLException e) {
            throw new RuntimeException("Error deleting pet by ID.", e);
        }
    }

    @Override
    public Pet updatePet(Pet pet) {
        try {
            return petDao.updatePet(pet);
        } catch (SQLException e) {
            throw new RuntimeException("Error updating pet.", e);
        }
    }

    @Override
    public Pet findByBreed(String breed) {
        try {
            return petDao.findByBreed(breed);
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching pet by breed.", e);
        }
    }
}

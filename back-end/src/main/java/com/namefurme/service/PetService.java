package com.namefurme.service;

import com.namefurme.model.Pet;
import java.sql.SQLException;
import java.util.List;

public interface PetService {

    List<Pet> findAll() throws SQLException;

    Pet findById(Long id) throws SQLException;

    Pet create(Pet pet) throws SQLException;

    boolean delete(Pet pet) throws SQLException;

    boolean deleteById(Long id) throws SQLException;

    Pet updatePet(Pet pet) throws SQLException;

    Pet findByBreed(String breed) throws SQLException;
}


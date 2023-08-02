package com.namefurme.dao;

import com.namefurme.model.Pet;
import java.util.List;

public interface PetDao {

    List<Pet> findAll();
    Pet findById(Long id);
    void save(Pet pet);
    void delete(Pet pet);
    void update(Pet pet);
    
}

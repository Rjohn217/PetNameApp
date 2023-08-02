package com.namefurme.dao;

import com.namefurme.model.User;
import java.util.List;

public interface UserDao {

    List<User> findAll();
    User findById(Long id);
    User findByUsername(String username);
    User findByEmail(String email);
    void save(User user);
    void delete(User user);
    void update(User user);
    
}

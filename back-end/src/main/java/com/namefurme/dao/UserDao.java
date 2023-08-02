package com.namefurme.dao;

import com.namefurme.model.User;

import java.sql.SQLException;
import java.util.List;

public interface UserDao {

    List<User> findAll() throws SQLException;
    User findById(Long id) throws SQLException;
    User findByUsername(String username) throws SQLException;
    User findByEmail(String email) throws SQLException;
    User createUser(User user) throws SQLException;
    boolean deleteUser(User user) throws SQLException;
    boolean deleteUserById(Long id) throws SQLException;
    User updateUser(User user) throws SQLException;
    
}

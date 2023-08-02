package com.namefurme.service;

import com.namefurme.dao.UserDao;
import com.namefurme.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public List<User> findAll() {
        try {
            return userDao.findAll();
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching all users.", e);
        }
    }

    @Override
    public User findById(Long id) {
        try {
            return userDao.findById(id);
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching user by ID.", e);
        }
    }

    @Override
    public User findByUsername(String username) {
        try {
            return userDao.findByUsername(username);
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching user by username.", e);
        }
    }

    @Override
    public User findByEmail(String email) {
        try {
            return userDao.findByEmail(email);
        } catch (SQLException e) {
            throw new RuntimeException("Error fetching user by email.", e);
        }
    }

    @Override
    public User createUser(User user) {
        try {
            return userDao.createUser(user);
        } catch (SQLException e) {
            throw new RuntimeException("Error creating user.", e);
        }
    }

    @Override
    public boolean deleteUser(User user) {
        try {
            return userDao.deleteUser(user);
        } catch (SQLException e) {
            throw new RuntimeException("Error deleting user.", e);
        }
    }

    @Override
    public boolean deleteUserById(Long id) {
        try {
            return userDao.deleteUserById(id);
        } catch (SQLException e) {
            throw new RuntimeException("Error deleting user by ID.", e);
        }
    }

    @Override
    public void update(User user) {
        try {
            userDao.updateUser(user);
        } catch (SQLException e) {
            throw new RuntimeException("Error updating user.", e);
        }
    }
}

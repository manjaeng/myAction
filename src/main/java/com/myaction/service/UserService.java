package com.myaction.service;

import com.myaction.domain.UserMapper;
import com.myaction.domain.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    public List<UserVO> getUserList() {
        return userMapper.getUserList();
    }
}

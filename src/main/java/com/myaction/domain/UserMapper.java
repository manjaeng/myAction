package com.myaction.domain;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("UserMapper")
public class UserMapper extends AbstractDAO {
    public List<UserVO> getUserList(){
        return (List<UserVO>)selectList("userSelect");
    }
}

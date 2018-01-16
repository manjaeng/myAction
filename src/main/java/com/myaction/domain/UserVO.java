package com.myaction.domain;

public class UserVO {

    private int maUserId;
    private String maUserName;
    private String password;

    public UserVO() {
    }

    public UserVO(int maUserId, String maUserName, String password) {
        this.maUserId = maUserId;
        this.maUserName = maUserName;
        this.password = password;
    }

    public int getMaUserId() {
        return maUserId;
    }

    public void setMaUserId(int maUserId) {
        this.maUserId = maUserId;
    }

    public String getMaUserName() {
        return maUserName;
    }

    public void setMaUserName(String maUserName) {
        this.maUserName = maUserName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

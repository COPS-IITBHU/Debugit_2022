package com.example.finalapp;

public class storingdata {
    String name,password,rollno;

    public storingdata() {
    }

    public storingdata(String name, String password, String rollno) {
        this.name = name;
        this.password = password;
        this.rollno = rollno;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRollno() {
        return rollno;
    }

    public void setRollno(String rollno) {
        this.rollno = rollno;
    }
}

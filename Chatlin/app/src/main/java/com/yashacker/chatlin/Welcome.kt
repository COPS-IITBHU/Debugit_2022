package com.yashacker.chatlin

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class Welcome : AppCompatActivity() {
    private lateinit var btnwelcomesignup: Button
    private lateinit var btnwelcomelogin : Button
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_welcome)
        btnwelcomelogin = findViewById(R.id.btnwelcomelogin)
        btnwelcomesignup = findViewById(R.id.btnwelcomesignup)

        btnwelcomesignup.setOnClickListener {
            val intent = Intent(this, SignUp_Activity::class.java)
            startActivity(intent)
        }
        btnwelcomelogin.setOnClickListener {
            val intent = Intent(this, Login_Activity::class.java)
            startActivity(intent)
        }
    }
}
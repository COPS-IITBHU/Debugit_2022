package com.yashacker.chatlin

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView

class SignUp_Activity : AppCompatActivity() {
    private lateinit var signupbacktowelcome : ImageView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_up)
        signupbacktowelcome = findViewById(R.id.signupbacktowelcome)
        signupbacktowelcome.setOnClickListener {
            finish()
        }
    }
}
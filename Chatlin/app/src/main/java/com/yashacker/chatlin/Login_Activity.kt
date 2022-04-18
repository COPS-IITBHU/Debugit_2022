package com.yashacker.chatlin

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.ContactsContract
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.TextView

class Login_Activity : AppCompatActivity() {
    private lateinit var  editEmail: EditText
    private lateinit var  editPassword : EditText
    private lateinit var btnlogin : Button
    private lateinit var textsignup : TextView
    private lateinit var loginbacktowelcome : ImageView


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        loginbacktowelcome = findViewById(R.id.loginbacktowelcome)
        loginbacktowelcome.setOnClickListener {
            finish()
        }



    }
}
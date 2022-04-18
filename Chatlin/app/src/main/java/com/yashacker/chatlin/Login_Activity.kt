package com.yashacker.chatlin

import android.content.ContentValues.TAG
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.util.Patterns
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth

class Login_Activity : AppCompatActivity() {
    private lateinit var  editEmail: EditText
    private lateinit var  editPassword : EditText
    private lateinit var btnlogin : Button
    private lateinit var textsignup : TextView
    private lateinit var loginbacktowelcome : ImageView
    private lateinit var mAuth : FirebaseAuth


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        mAuth = FirebaseAuth.getInstance()
        loginbacktowelcome = findViewById(R.id.loginbacktowelcome)
        editEmail = findViewById(R.id.editEmail)
        editPassword = findViewById(R.id.editPassword)
        btnlogin = findViewById(R.id.btnlogin)
        textsignup = findViewById(R.id.textsignup)


        loginbacktowelcome.setOnClickListener {
            finish()
        }
        btnlogin.setOnClickListener{

            credential_check()
        }
        textsignup.setOnClickListener{
            val intent = Intent(this@Login_Activity, SignUp_Activity::class.java)
            startActivity(intent)
        }

    }
    private fun login(email: String, password: String){
        //logic for logging in user
        mAuth.signInWithEmailAndPassword(email, password)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    // Sign in success, update UI with the signed-in user's information
                    Log.d(TAG, "signInWithEmail:success")
                    val intent = Intent(this@Login_Activity, MainActivity::class.java)
                    startActivity(intent)



                } else {
                    // If sign in fails, display a message to the user.
                    Log.w(TAG, "signInWithEmail:failure", task.exception)
                    Toast.makeText(this@Login_Activity, "User does not Exist!",
                        Toast.LENGTH_SHORT).show()
                }

            }

    }
    private fun credential_check() {
        val email = editEmail.text.toString()
        val password = editPassword.text.toString()
        val emailAddress: String = email.trim()
        if (password.length < 6) {
            editPassword.error = "password minimum contain 6 character"
            editPassword.requestFocus()
        }
        if (password == "") {
            editPassword.error = "please enter password 🤣"
            editPassword.requestFocus()
        }
        if (!Patterns.EMAIL_ADDRESS.matcher(emailAddress).matches()) {
            editEmail.error = "please enter valid email address"
            editEmail.requestFocus()
        }
        if (email == "") {
            editEmail.error = "please enter email address 🤣"
            editEmail.requestFocus()
        }
        if (emailAddress != "" && password.length >= 6 &&
            password.trim() != "" &&
            Patterns.EMAIL_ADDRESS.matcher(emailAddress).matches()
        ) {

            login(email, password)
        }
    }
}
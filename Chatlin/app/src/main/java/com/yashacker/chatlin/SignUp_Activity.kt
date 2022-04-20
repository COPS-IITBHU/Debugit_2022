package com.yashacker.chatlin

import android.content.ContentValues.TAG
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.util.Patterns
import android.widget.*
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase

class SignUp_Activity : AppCompatActivity() {
    private lateinit var signupbacktowelcome : ImageView
    private lateinit var textlogin : TextView
    private lateinit var  editEmail: EditText
    private lateinit var  editUsername: EditText
    private lateinit var  editPassword : EditText
    private lateinit var btnsignup : Button
    private lateinit var mAuth : FirebaseAuth
    private lateinit var mDbRef: DatabaseReference


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_up)
        signupbacktowelcome = findViewById(R.id.signupbacktowelcome)
        editEmail = findViewById(R.id.editEmail)
        editPassword = findViewById(R.id.editPassword)
        btnsignup = findViewById(R.id.btnsignup)
        textlogin = findViewById(R.id.textlogin)
        editUsername = findViewById(R.id.editUsername)
        mAuth = FirebaseAuth.getInstance()

        signupbacktowelcome.setOnClickListener {
            finish()
        }
        btnsignup.setOnClickListener {
            credential_check()
        }
        textlogin.setOnClickListener{
            val intent = Intent(this@SignUp_Activity, Login_Activity::class.java)
            startActivity(intent)
            overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out )
        }
    }
    private fun signUp(name: String, email: String, password: String){
        //logic for creating user
        mAuth.createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    Log.d(TAG, "createUserWithEmail:success")
                    addUserToDatabase(name,email,mAuth.currentUser?.uid!!)

                    // Sign in success, update UI with the signed-in user's information
                    val intent = Intent(this@SignUp_Activity, MainActivity::class.java)
                    finish()
                    startActivity(intent)
                    overridePendingTransition(android.R.anim.slide_in_left, android.R.anim.slide_out_right )


                } else {
                    // If sign in fails, display a message to the user.
                    Log.w(TAG, "createUserWithEmail:failure", task.exception)
                    Toast.makeText(this@SignUp_Activity, "Authentication failed or User already exist.", Toast.LENGTH_SHORT).show()

                }
            }
    }
    private fun credential_check() {
        val email = editEmail.text.toString()
        val password = editPassword.text.toString()
        val username = editUsername.text.toString()
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
        if (username == "") {
            editUsername.error = "please enter Username 😤"
            editUsername.requestFocus()
        }
        if (emailAddress != "" && password.length >= 6 &&
            password.trim() != "" &&
            Patterns.EMAIL_ADDRESS.matcher(emailAddress).matches()
        ) {

            signUp(username, email, password)
        }
    }
    private fun addUserToDatabase(name: String, email: String, uid: String){
        mDbRef = FirebaseDatabase.getInstance().reference

        mDbRef.child("user").child(uid).setValue(User(name,email,uid))


    }





}
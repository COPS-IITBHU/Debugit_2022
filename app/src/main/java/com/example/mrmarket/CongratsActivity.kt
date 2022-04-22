package com.example.mrmarket

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.mrmarket.databinding.ActivityCongratsBinding

class CongratsActivity : AppCompatActivity() {
    private lateinit var binding: ActivityCongratsBinding   //for binding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCongratsBinding.inflate(layoutInflater)   //for binding
        setContentView(binding.root)

        binding.continueShoppingBtn.setOnClickListener {
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
        }

        binding.smiley.setImageResource(R.drawable.happy)
    }
}
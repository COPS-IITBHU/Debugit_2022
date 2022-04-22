package com.example.mrmarket

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.mrmarket.books.BooksActivity
import com.example.mrmarket.databinding.ActivityMainBinding
import com.example.mrmarket.electronics.ElectronicDevicesActivity
import com.example.mrmarket.others.OthersActivity
import com.example.mrmarket.wearables.WearablesActivity

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding   //for binding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)   //for binding
        setContentView(binding.root)

        binding.electronicsBtn.setOnClickListener {
//            Toast.makeText(this, "Nice Choice!", Toast.LENGTH_SHORT).show()
            electronics()
        }
        binding.wearablesBtn.setOnClickListener {
            wearables()
        }
        binding.booksBtn.setOnClickListener {
            books()
        }
        binding.othersBtn.setOnClickListener {
            others()
        }

        binding.mrMarket.setImageResource(R.drawable.mrmarket)
    }

    private fun electronics() {
        val listIntent = Intent(this, ElectronicDevicesActivity::class.java)
        startActivity(listIntent)
    }

    private fun wearables() {
        val listIntent = Intent(this, WearablesActivity::class.java)
        startActivity(listIntent)
    }

    private fun books() {
        val listIntent = Intent(this, BooksActivity::class.java)
        startActivity(listIntent)
    }

    private fun others() {
        val listIntent = Intent(this, OthersActivity::class.java)
        startActivity(listIntent)
    }

}
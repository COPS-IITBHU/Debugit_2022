package com.example.mrmarket.books

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.mrmarket.adapter.ItemAdapter
import com.example.mrmarket.databinding.ActivityVerticalRecyclerViewBinding

class BooksActivity : AppCompatActivity() {
    private lateinit var binding: ActivityVerticalRecyclerViewBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityVerticalRecyclerViewBinding.inflate(layoutInflater)
        setContentView(binding.root)

        title = "Books"

        binding.verticalRecyclerView.adapter = ItemAdapter(applicationContext, 3)

        binding.verticalRecyclerView.setHasFixedSize(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
    }
}
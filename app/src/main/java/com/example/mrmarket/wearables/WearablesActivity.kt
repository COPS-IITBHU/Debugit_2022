package com.example.mrmarket.wearables

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.mrmarket.adapter.ItemAdapter
import com.example.mrmarket.databinding.ActivityVerticalRecyclerViewBinding

class WearablesActivity : AppCompatActivity() {
    private lateinit var binding: ActivityVerticalRecyclerViewBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityVerticalRecyclerViewBinding.inflate(layoutInflater)
        setContentView(binding.root)

        title = "Wearables"

        binding.verticalRecyclerView.adapter = ItemAdapter(applicationContext, 2)

        binding.verticalRecyclerView.setHasFixedSize(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
    }
}
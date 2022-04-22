package com.example.mrmarket.electronics

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.mrmarket.adapter.ItemAdapter
import com.example.mrmarket.databinding.ActivityVerticalRecyclerViewBinding

class ElectronicDevicesActivity : AppCompatActivity() {

    private lateinit var binding: ActivityVerticalRecyclerViewBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityVerticalRecyclerViewBinding.inflate(layoutInflater)
        setContentView(binding.root)

        title = "Electronics"

        binding.verticalRecyclerView.adapter = ItemAdapter(applicationContext, 1)

        binding.verticalRecyclerView.setHasFixedSize(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
    }
}
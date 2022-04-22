package com.example.mrmarket

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.mrmarket.databinding.ActivityBuyBinding

class BuyActivity : AppCompatActivity() {
    private lateinit var binding: ActivityBuyBinding   //for binding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityBuyBinding.inflate(layoutInflater)   //for binding
        setContentView(binding.root)

        title = "Order Summary"

        binding.confirmOrderBtn.setOnClickListener {
            val intent = Intent(this, CongratsActivity::class.java)
            startActivity(intent)

            Toast.makeText(this, "Order Placed!", Toast.LENGTH_SHORT).show()
        }

        val price = intent.getStringExtra("oldPrice")
        binding.oldPrice.text = price

        val offer = intent.getStringExtra("discount")
        binding.discountAmt.text = offer

        val amt = intent.getStringExtra("newPrice")
        binding.totalAmt.text = amt

        binding.img.setImageResource(R.drawable.paise_lelo)

    }
}
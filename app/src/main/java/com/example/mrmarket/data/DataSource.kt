package com.example.mrmarket.data

import com.example.mrmarket.R
import com.example.mrmarket.model.Item

object DataSource {
    val electronics: List<Item> = listOf(
        Item(R.drawable.laptop1a, "Macbook Pro 512GB", "1,22,900", "1,13,790", "7"),
        Item(R.drawable.laptop2a, "HP Pavilion 15-dk1514TX", "81,869", "64,990", "21"),
        Item(R.drawable.mob1a, "OnePlus 10 Pro 5G", "66,999", "95,659", "2"),
        Item(R.drawable.mob2a, "Samsung Galaxy S22 Ultra 5G", "1,31,999", "1,09,999", "17")
    )

    val wearables: List<Item> = listOf(
        Item(R.drawable.w1a, "Armani Exchange Cayde", "12,995", "10,069", "20"),
        Item(R.drawable.w2a, "Apple Watch Series 7", "50,900", "47,900", "6"),
        Item(R.drawable.w3a, "Cotton Masks", "999", "297", "70"),
        Item(R.drawable.w4a, "Fastrack UV Protected Sunglasses", "799", "639", "20")
    )

    val books: List<Item> = listOf(
        Item(R.drawable.b1a, "The Intelligent Investor", "899", "435", "52"),
        Item(R.drawable.b2a, "The Secret", "799", "588", "26"),
        Item(R.drawable.b3a, "Rich Dad Poor Dad", "499", "325", "35")
    )

    val others: List<Item> = listOf(
        Item(R.drawable.o1a, "Fogg Xtremo Scent", "500", "376", "25"),
        Item(R.drawable.o2a, "Milton Thermosteel Bottle", "1,205", "1,037", "14")
    )
}
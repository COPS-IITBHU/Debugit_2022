package com.example.mrmarket.model

import androidx.annotation.DrawableRes

data class Item (
    @DrawableRes val imgResId: Int,
    val name: String,
    val oldPrice: String,
    val newPrice: String,
    val discount: String
        )
package com.example.mrmarket.adapter

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import androidx.recyclerview.widget.RecyclerView
import com.example.mrmarket.R
import com.example.mrmarket.data.CardImagesDatasource

class CardImagesAdapter(private val context: Context, private val category: String) : RecyclerView.Adapter<CardImagesAdapter.CardImagesViewHolder>() {

    private val dataset = when(category) {
        "e1" -> CardImagesDatasource.e1
        "e2" -> CardImagesDatasource.e2
        "e3" -> CardImagesDatasource.e3
        "e4" -> CardImagesDatasource.e4

        "w1" -> CardImagesDatasource.w1
        "w2" -> CardImagesDatasource.w2
        "w3" -> CardImagesDatasource.w3
        "w4" -> CardImagesDatasource.w4

        "b1" -> CardImagesDatasource.b1
        "b2" -> CardImagesDatasource.b2
        "b3" -> CardImagesDatasource.b3

        "o1" -> CardImagesDatasource.o1
        else -> CardImagesDatasource.o2

    }

    class CardImagesViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {
        val img : ImageView = view.findViewById(R.id.item_card_image)!!

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CardImagesViewHolder {
        val adapterLayout =
            LayoutInflater.from(parent.context).inflate(R.layout.card_image_item, parent, false)
        return CardImagesAdapter.CardImagesViewHolder(adapterLayout)
    }

    override fun onBindViewHolder(holder: CardImagesViewHolder, position: Int) {
        val item = dataset[position]

        holder.img.setImageResource(item.imageResourceId)
    }

    override fun getItemCount(): Int {
        return dataset.size
    }
}
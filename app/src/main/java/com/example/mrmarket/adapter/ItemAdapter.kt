package com.example.mrmarket.adapter

import android.content.Context
import android.content.Intent
import android.graphics.Paint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.mrmarket.R
import com.example.mrmarket.cardDetails.CardDetailsActivity
import com.example.mrmarket.data.DataSource
import com.google.android.material.card.MaterialCardView

class ItemAdapter(private val context: Context, private val category: Int) :
    RecyclerView.Adapter<ItemAdapter.ItemViewHolder>() {

    private val dataset = when (category) {
        1 -> {
            DataSource.electronics
        }
        2 -> {
            DataSource.wearables
        }
        3 -> {
            DataSource.books
        }
        else -> {
            DataSource.others
        }
    }

    class ItemViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {
        val img: ImageView = view.findViewById(R.id.item_image)
        val name: TextView = view.findViewById(R.id.item_name)
        val oldPrice: TextView = view.findViewById(R.id.item_old_price)
        val newPrice: TextView = view.findViewById(R.id.item_new_price)
        val disc: TextView = view.findViewById(R.id.item_discount)

        val detailsBtn : Button = view.findViewById(R.id.item_details_btn)
//        val card: MaterialCardView = view.findViewById<MaterialCardView>(R.id.item_cards)

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ItemAdapter.ItemViewHolder {

        val adapterLayout =
            LayoutInflater.from(parent.context).inflate(R.layout.list_item, parent, false)
        return ItemAdapter.ItemViewHolder(adapterLayout)

    }

    override fun onBindViewHolder(holder: ItemAdapter.ItemViewHolder, position: Int) {
        val item = dataset[position]
        holder.img.setImageResource(item.imgResId)

        val resources = context.resources

        holder.name.text = resources.getString(R.string.name, item.name)
        holder.oldPrice.text = resources.getString(R.string.old_price, item.oldPrice)
        holder.newPrice.text = resources.getString(R.string.new_price, item.newPrice)
        holder.disc.text = resources.getString(R.string.discount, item.discount)

        holder.oldPrice.paintFlags = Paint.STRIKE_THRU_TEXT_FLAG       //for strike-through old price

        holder.detailsBtn.setOnClickListener {
            val intent = Intent(it.context, CardDetailsActivity::class.java)
            intent.putExtra("card_name", holder.name.text)
            intent.putExtra("old_price", holder.oldPrice.text)
            intent.putExtra("new_price", holder.newPrice.text)
            intent.putExtra("discount", holder.disc.text)
            it.context.startActivity(intent)
        }

    }


    override fun getItemCount(): Int {
        return dataset.size
    }

}
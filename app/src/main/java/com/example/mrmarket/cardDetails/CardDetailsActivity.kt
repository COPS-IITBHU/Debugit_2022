package com.example.mrmarket.cardDetails

import android.content.Intent
import android.graphics.Color
import android.graphics.Paint
import android.icu.util.Measure
import android.os.Bundle
import android.view.Display
import android.webkit.WebStorage
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.mrmarket.BuyActivity
import com.example.mrmarket.adapter.CardImagesAdapter
import com.example.mrmarket.databinding.ActivityCardDetailsBinding
import java.util.concurrent.Flow

class CardDetailsActivity : AppCompatActivity() {
    private lateinit var binding: ActivityCardDetailsBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCardDetailsBinding.inflate(layoutInflater)
        setContentView(binding.root)

        title = "Details"

        val cName = intent.getStringExtra("card_name")
        binding.cardName.text = cName

        val oPrice = intent.getStringExtra("old_price")
        binding.oldPrice.text = oPrice
        binding.oldPrice.paintFlags = Paint.STRIKE_THRU_TEXT_FLAG   //for strike-through old price

        val nPrice = intent.getStringExtra("new_price")
        binding.newPrice.text = nPrice

        val discount = intent.getStringExtra("discount")
        binding.discount.text = discount

        when (cName) {
            "Macbook Pro 512GB" -> {
                binding.cardDescription.text = "►Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance\n►Get more done with up to 20 hours of battery life, the longest ever in a Mac\n►8-core GPU with up to 5x faster graphics for graphics-intensive apps and games\n►16-core Neural Engine for advanced machine learning"
            }
            "HP Pavilion 15-dk1514TX" -> {
                binding.cardDescription.text = "►Ports: 1 USB 3.1 Gen 1 Type-C; 1 USB 3.1 Gen 1 Type-A, etc.\n►Display: 15.6-Inch FHD IPS anti-glare micro-edge WLED-backlit, 250 nits, 45% NTSC (1920 x 1080)\n►16-core Neural Engine for advanced machine learning\n►Fast Charge Battery"
            }
            "OnePlus 10 Pro 5G" -> {
                binding.cardDescription.text = "►Camera: 48MP Main Camera, 50MP Ultra-wide angle camera & 8MP Tele photo lens\n►Display: 6.7 Inches; 120 Hz QHD+ Fluid AMOLED with LTPO\n►Operating System: Oxygen OS based on Android 12\n►Flow.Processor: Qualcomm Snapdragon 8 Gen 1\n►Battery & Charging: 5000 mAh with 80W SuperVOOC"
            }
            "Samsung Galaxy S22 Ultra 5G" -> {
                binding.cardDescription.text = "►5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever\n►The Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness\n►Only compatible with Android Smartphones (Runs on Wear OS Powered by Samsung)\n►Health Monitoring features such as Advanced Sleep Analysis & Women's Health.\n►Enhanced Fitness tracking lets you track 90+ workouts"
            }
            "Armani Exchange Cayde" -> {
                binding.cardDescription.text = "►Featuring a 42mm case, 20mm band width, scratch resistant mineral crystal, Quartz movement with 3-hand analog display, imported.\n►Round stainless steel case, with a black dial.\n►Black, stainless steel bracelet.\n►Water resistant up to 50m: Wearable while swimming in shallow water."
            }
            "Apple Watch Series 7" -> {
                binding.cardDescription.text = "►Stream music and podcasts on the go, and leave your phone at home\n►Measure your blood oxygen with a powerful sensor and app\n►Take an ECG anytime, anywhere\n►Get high and low heart rate, and irregular heart rhythm notifications"
            }
            "Cotton Masks" -> {
                binding.cardDescription.text = "►Breathable : Super Breathable mask with ultimate protection provides cooling effect on face with cotton fabric layer in hot weather and hence you will love to wear it all day long.\n►Comfortable ear loop : Ultra soft 5mm red colored elastic which do not cause irritation on ear during long time wearing\n►Compatible : Compatible with facial movement and feels unique fit to face"
            }
            "Fastrack UV Protected Sunglasses" -> {
                binding.cardDescription.text =  "►FRAME PATTERN:- Featuring Grey Full Rim Square made from TR90 which is incredibly durable, flexible, and lightweight which makes it extremely comtable to wear for both men & women.\n►FRAME SIZE:- Large | Frame width: 141mm | Frame Height: 41mm | Frame Dimensions: (54-17-140)mm\n►LENS TECHNOLOGY:- They have scratch coating, blocks 100% harmful UV rays up to 400 nm and are very lightweight and highly impact resistant."
            }
            "The Intelligent Investor" -> {
                binding.cardDescription.text = "►“By far the best book on investing ever written.” -- Warren Buffett\n►“If you read just one book on investing during your lifetime, make it this one” -- Fortune\n►“The wider Mr. Graham’s gospel spreads, the more fairly the market will deal with its public.” -- Barron's"
            }
            "The Secret" -> {
                binding.cardDescription.text = "►Regarded as a life-changing read by many readers, The Secret by Rhonda Byrne is a self-help book that embarks to motivate the reader about a universal paradigm about success that can be achieved through it remains hidden for most people. The book explores about unveiling this little secret which may transform how people look at things and lead them on to the road of success and true happiness."
            }
            "Rich Dad Poor Dad" -> {
                binding.cardDescription.text = "►A collection of world's timeless classics, this box set includes the four greatest bestsellers, which have inspired readers for generations. Packed with wisdom and time-tested principles that are as relevant in modern times as ever before, these inspirational books are a must-read for all those aspiring for personal growth and wealth."
            }
            "Fogg Xtremo Scent" -> {
                binding.cardDescription.text = "►Quantity: 100ml; Item Form: Spray\n►Ensures you 800 sprays. Fragrance Segment: Luxury\n►Long lasting fragrance. Fragrance stays for almost 4-5 hours of application\n►Country of WebStorage.Origin: India"
            }
            "Milton Thermosteel Bottle" -> {
                binding.cardDescription.text = "►It comes with bag and belt for easy carrying anywhere you go office, home, picnics, outdoor, campaning. Ideal for self use and gifting. This reusable water bottle is made from 304 Grade stainless steel, leak proof, durable, unbreakable, rust proof\n►Pre-condition bottle with hot water if using for HOT beverage and cold water if using for COLD.\n►Color: Silver, Material: Stainless Steel. Package Contents: 1 - Piece Flip Lid Water Bottle (1 Litre)."
            }
        }

        when (cName) {
            "Macbook Pro 512GB" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "e1")
            }
            "HP Pavilion 15-dk1514TX" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "e2")
            }
            "OnePlus 10 Pro 5G" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "e3")
            }
            "Samsung Galaxy S22 Ultra 5G" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "e4")
            }
            "Armani Exchange Cayde" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "w1")
            }
            "Apple Watch Series 7" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "w2")
            }
            "Cotton Masks" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "w3")
            }
            "Fastrack UV Protected Sunglasses" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "w4")
            }
            "The Intelligent Investor" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "b1")
            }
            "The Secret" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "b2")
            }
            "Rich Dad Poor Dad" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "b3")
            }
            "Fogg Xtremo Scent" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "o1")
            }
            "Milton Thermosteel Bottle" -> {
                binding.cardImages.adapter = CardImagesAdapter(applicationContext, "o2")
            }
        }

        binding.buyBtn.setOnClickListener {
            val intent = Intent(this, BuyActivity::class.java)
            intent.putExtra("oldPrice", binding.oldPrice.text)
            intent.putExtra("discount", binding.discount.text)
            intent.putExtra("newPrice", binding.newPrice.text)

            startActivity(intent)

//            Toast.makeText(this, "Bought!", Toast.LENGTH_SHORT).show()
        }
    }
}
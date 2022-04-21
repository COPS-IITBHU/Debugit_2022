package com.yashacker.chatlin

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.EditText
import android.widget.ImageView
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.*
import com.google.firebase.ktx.Firebase
import com.yashacker.chatlin.adapter.MessageAdapter

class ChatActivity : AppCompatActivity() {
    private lateinit var chatRecyclerView: RecyclerView
    private lateinit var messageBox: EditText
    private lateinit var sendButton: ImageView
    private lateinit var backButton: ImageView
    private lateinit var infoButton: ImageView
    private lateinit var messageAdapter: MessageAdapter
    private lateinit var messageList: ArrayList<Message>
    private lateinit var mDbRef : DatabaseReference


    var receiverRoom: String? = null
    var senderRoom: String? = null // used to create unique room for sender and listener pair

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_chat)

        val name = intent.getStringExtra("name")
        val receiverUid = intent.getStringExtra("uid")
        val senderUid = FirebaseAuth.getInstance().currentUser?.uid
        mDbRef = FirebaseDatabase.getInstance().reference

        senderRoom = receiverUid + senderUid
        receiverRoom = senderUid + receiverUid



        chatRecyclerView =findViewById(R.id.chatRecyclerView)
        sendButton =findViewById(R.id.sendButton)
        messageBox = findViewById(R.id.messageBox)
        backButton = findViewById(R.id.backButton)
        infoButton = findViewById(R.id.infoButton)
        messageList = ArrayList()
        messageAdapter = MessageAdapter(this,messageList)
        chatRecyclerView.layoutManager = LinearLayoutManager(this)
        chatRecyclerView.adapter = messageAdapter

        //logic for adding data to recyclerView
        mDbRef.child("chats").child(senderRoom!!).child("messages")
            .addValueEventListener(object: ValueEventListener{
                override fun onDataChange(snapshot: DataSnapshot) {
                    messageList.clear()


                    for(postSnapshot in snapshot.children){

                        val message = postSnapshot.getValue(Message::class.java)
                        messageList.add(message!!)
                    }
                    messageAdapter.notifyDataSetChanged()

                }

                override fun onCancelled(error: DatabaseError) {

                }

            })

        infoButton.setOnClickListener {
            Toast.makeText(this@ChatActivity, "Your are talking to $name ;) ", Toast.LENGTH_LONG).show()
        }
        backButton.setOnClickListener {
            val intent = Intent(this@ChatActivity, MainActivity::class.java)
            finish()
        }
        //adding the message to the database
        sendButton.setOnClickListener {



            val message = messageBox.text.toString()
            if (message == "") {
                messageBox.error = " Enter a message Bruh!! 🤣"
                messageBox.requestFocus()}else {
                val messageObject = Message(message, senderUid)

                mDbRef.child("chats").child(senderRoom!!).child("messages").push()
                    .setValue(messageObject).addOnSuccessListener {
                        mDbRef.child("chats").child(receiverRoom!!).child("messages").push()
                            .setValue(messageObject)
                    }
            }
            messageBox.setText("");







        }




    }


}
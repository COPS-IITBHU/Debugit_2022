package com.yashacker.chatlin

import android.os.Bundle

import android.view.View
import android.view.View.INVISIBLE
import android.widget.ImageView
import android.widget.ProgressBar
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.isInvisible
import androidx.core.view.isVisible
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.*
import com.yashacker.chatlin.adapter.UserAdapter

class MainActivity : AppCompatActivity() {


    private lateinit var usersRecyclerView: RecyclerView
    private lateinit var userList: ArrayList<User>
    private lateinit var adapter: UserAdapter
    private lateinit var mAuth: FirebaseAuth
    private lateinit var ImageLogout : ImageView
    private lateinit var mDbRef: DatabaseReference

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        ImageLogout = findViewById(R.id.ImageLogout)
        mAuth = FirebaseAuth.getInstance()

        mDbRef = FirebaseDatabase.getInstance().reference



        userList = ArrayList()
        adapter = UserAdapter(this,userList)
        ImageLogout.setOnClickListener{
            mAuth.signOut()
            finish()
        }
        usersRecyclerView =findViewById(R.id.usersRecyclerView)

        usersRecyclerView.layoutManager = LinearLayoutManager(this)
        usersRecyclerView.adapter =adapter
        mDbRef.child("user").addValueEventListener(object: ValueEventListener{
            override fun onDataChange(snapshot: DataSnapshot) {
                userList.clear()


                for(postSnapshot in snapshot.children){
                    val currentUser = postSnapshot.getValue(User::class.java)
                    if(mAuth.currentUser?.uid != currentUser?.uid ){
                        userList.add(currentUser!!)
                    }




                }
                adapter.notifyDataSetChanged()



            }

            override fun onCancelled(error: DatabaseError) {

            }

        })
        



    }


        
    }

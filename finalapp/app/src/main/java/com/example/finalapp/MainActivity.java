package com.example.finalapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.google.android.material.textfield.TextInputLayout;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.Query;
import com.google.firebase.database.ValueEventListener;

public class MainActivity extends AppCompatActivity {

    //TextInputLayout t,p;
    TextInputLayout t, p;
    Button  b2,b3;
//    TextView b3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//    }
//    public void activity(View v){
        t = findViewById(R.id.t);
        p = findViewById(R.id.p);
//        b1 = findViewById(R.id.b1);
        b2 = findViewById(R.id.b2);
//        b3=findViewById(R.id.b3);
        b3 = findViewById(R.id.b3);
//        textview2=findViewById(R.id.textView2);
        b2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String username_=t.getEditText().getText().toString();
                String password_=p.getEditText().getText().toString();
                if(username_.isEmpty()){
                    Toast.makeText(MainActivity.this, "ENTER ROLL NO", Toast.LENGTH_SHORT).show();
                }else if (password_.isEmpty()){
                    Toast.makeText(MainActivity.this,"ENTER PASSWORD",Toast.LENGTH_SHORT).show();
                }
                final  String username_data= t.getEditText().getText().toString();
                final String password_data=p.getEditText().getText().toString();
                FirebaseDatabase firebaseDatabase= FirebaseDatabase.getInstance();
                DatabaseReference databaseReference=firebaseDatabase.getReference("data user");
                Query check_username=databaseReference.orderByChild("name").equalTo(username_data);
                check_username.addListenerForSingleValueEvent(new ValueEventListener() {
                    @Override
                    public void onDataChange(@NonNull DataSnapshot snapshot) {
                        if (snapshot.exists()){
                            t.setError(null);
                            p.setErrorEnabled(false);
                            String passwordcheck=snapshot.child(username_data).child("password").getValue(String.class);
                            if(passwordcheck.equals(password_data)){
                                t.setError(null);
                                p.setErrorEnabled(false);
//                                Intent intent1= new Intent(getApplicationContext(),dashboard.class)
                                Intent intent= new Intent(getApplicationContext(), dashboard.class);
//                                intent.putExtra("username_",username_data);
                                startActivity(intent);
                                finish();


                            }else{
                                p.setError("please enter correct password");
                            }
                        }else{
                            t.setError("user doesnot exist");
                        }
                    }

                    @Override
                    public void onCancelled(@NonNull DatabaseError error) {

                    }
                });
            }
        });
        b3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(getApplicationContext(), phoneverification.class);
                startActivity(intent);
            }
        });
    }

}
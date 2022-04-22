package com.example.finalapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class sign_up extends AppCompatActivity {
    EditText et2,p1,rn;
    Button b1;
    FirebaseDatabase firebaseDatabase;
    DatabaseReference reference;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);
        rn=findViewById(R.id.rn);
        et2=findViewById(R.id.et2);
        p1=findViewById(R.id.p1);
//        p2=findViewById(R.id.p2);
        b1=findViewById(R.id.b1);
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String name=et2.getText().toString();
                String password= p1.getText().toString();
//                String pass2= p2.getText().toString();
                String rollno= rn.getText().toString();
                if(name.isEmpty()){
                    Toast.makeText(sign_up.this, "ENTER USERNAME", Toast.LENGTH_SHORT).show();

                }else if(password.isEmpty()){
                    Toast.makeText(sign_up.this, "ENTER PASSWORD", Toast.LENGTH_SHORT).show();
//                }else if (pass2.isEmpty()){
//                    Toast.makeText(sign_up.this, "ENTER CONFIRM PASSWORD", Toast.LENGTH_SHORT).show();
//
                }
                else if(rollno.isEmpty()){
                    Toast.makeText(sign_up.this, "ENTER ROLL NO", Toast.LENGTH_SHORT).show();
                }
                if (!password.isEmpty() &&!name.isEmpty()&&!rollno.isEmpty()) {
                    firebaseDatabase = FirebaseDatabase.getInstance();
                    reference = firebaseDatabase.getReference("data user");
                    String name_s = et2.getText().toString();
                    String password_s = p1.getText().toString();
//                    String pass2_s= p2.getText().toString();
                    String rollno_s = rn.getText().toString();
                    storingdata storingdatass = new storingdata(name_s, password_s, rollno_s);
                    reference.child(name_s).setValue(storingdatass);
                    Toast.makeText(sign_up.this, "registration successfully", Toast.LENGTH_SHORT).show();
                    b1.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View view) {
                            Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                            startActivity(intent);
                            finish();
                        }
                    });
                }
                else {
                    Toast.makeText(sign_up.this, "PASSWORD DOESN'T MATCH RE-ENTER PASSWORD", Toast.LENGTH_SHORT).show();
                }

            }
        });
    }
}
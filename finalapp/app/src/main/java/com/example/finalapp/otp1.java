package com.example.finalapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.PhoneAuthCredential;
import com.google.firebase.auth.PhoneAuthProvider;

public class otp1 extends AppCompatActivity {
    EditText otp1a,otp2,otp3,otp4,otp5,otp6;
    String getotbackend;
    Button submit;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_otp1);
        submit=findViewById(R.id.submit);
        otp1a= findViewById(R.id.otp1a);
        otp2=findViewById(R.id.otp2);
        otp3=findViewById(R.id.otp3);
        otp4=findViewById(R.id.otp4);
//                for (int i=0;i<6;i++){
        otp5=findViewById(R.id.otp5);
        otp6=findViewById(R.id.otp6);
//             submit=findViewById(R.id.submit);
        TextView textView= findViewById(R.id.smb);
        textView.setText(String.format(
                "+91-%s",getIntent().getStringExtra("mobile")
        ));
        getotbackend = getIntent().getStringExtra("backendotp");
//       final ProgressBar progressBar= findViewById(R.id.progressBar);
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if (!otp1a.getText().toString().trim().isEmpty()&&!otp2.getText().toString().trim().isEmpty()&&!otp3.getText().toString().trim().isEmpty()&&!otp4.getText().toString().trim().isEmpty()&&!otp5.getText().toString().trim().isEmpty()&&!otp6.getText().toString().trim().isEmpty()){
//                    Toast.makeText(otp1.this,"otp verify",Toast.LENGTH_SHORT).show();
                    String enterotp= otp1a.getText().toString()+otp2.getText()+otp3.getText()+otp4.getText()+otp5.getText()+otp6.getText();
                    if(getotbackend!=null){
//                        progressBar.setVisibility(View.VISIBLE);
                        submit.setVisibility(View.INVISIBLE);

                        PhoneAuthCredential phoneAuthCredential= PhoneAuthProvider.getCredential(
                                getotbackend,enterotp
                        );
                        FirebaseAuth.getInstance().signInWithCredential(phoneAuthCredential)
                                .addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                                    @Override
                                    public void onComplete(@NonNull Task<AuthResult> task) {
//                                        progressBar.setVisibility(View.INVISIBLE);
                                        submit.setVisibility(View.VISIBLE);
                                        if(task.isSuccessful()){
                                            Intent intent=new Intent(getApplicationContext(),sign_up.class);
                                            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK|Intent.FLAG_ACTIVITY_CLEAR_TASK);
                                            startActivity(intent);
                                        }else{
                                            Toast.makeText(otp1.this,"invalid otp",Toast.LENGTH_SHORT).show();

                                        }
                                    }
                                });

                    }else{
                        Toast.makeText(otp1.this,"please check internet connection",Toast.LENGTH_SHORT).show();

                    }
                }else{
                    Toast.makeText(otp1.this,"please enter all number",Toast.LENGTH_SHORT).show();
                }
            }
        });
//        numberotpmove();
//        findViewById(R.id.textView11).setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//
//            }
//        });
    }

    private void numberotpmove() {
        otp1a.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                if(!charSequence.toString().trim().isEmpty()){
                    otp2.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });
        otp2.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                if(!charSequence.toString().trim().isEmpty()){
                    otp3.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });
        otp3.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                if(!charSequence.toString().trim().isEmpty()){
                    otp4.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });
        otp4.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                if(!charSequence.toString().trim().isEmpty()){
                    otp5.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });
        otp5.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                if(!charSequence.toString().trim().isEmpty()){
                    otp6.requestFocus();
                }
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });


    }

}
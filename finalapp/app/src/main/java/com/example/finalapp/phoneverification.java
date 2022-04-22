package com.example.finalapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.google.firebase.FirebaseException;
import com.google.firebase.auth.PhoneAuthCredential;
import com.google.firebase.auth.PhoneAuthProvider;
import java.util.concurrent.TimeUnit;

import java.util.concurrent.TimeUnit;

public class phoneverification extends AppCompatActivity {
    EditText et1;
    Button b;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_phoneverification);
        et1 = findViewById(R.id.et1);
        b = findViewById(R.id.b);
        final ProgressBar progressBar = findViewById(R.id.progressBar3);

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (!et1.getText().toString().trim().isEmpty()) {
                    if ((et1.getText().toString().trim()).length() == 10) {
                        progressBar.setVisibility(View.VISIBLE);
                        b.setVisibility(View.INVISIBLE);
                        PhoneAuthProvider.getInstance().verifyPhoneNumber(
                                "+91" + et1.getText().toString(),
                                60,
                                TimeUnit.SECONDS,
                                phoneverification.this,
                                new PhoneAuthProvider.OnVerificationStateChangedCallbacks() {
                                    @Override
                                    public void onVerificationCompleted(@NonNull PhoneAuthCredential phoneAuthCredential) {
                                        progressBar.setVisibility(View.GONE);
                                        b.setVisibility(View.VISIBLE);
                                    }

                                    @Override
                                    public void onVerificationFailed(@NonNull FirebaseException e) {
                                        progressBar.setVisibility(View.GONE);
                                        b.setVisibility(View.VISIBLE);
                                        Toast.makeText(phoneverification.this, e.getMessage(), Toast.LENGTH_SHORT).show();
                                    }

                                    @Override
                                    public void onCodeSent(@NonNull String backendotp, @NonNull PhoneAuthProvider.ForceResendingToken forceResendingToken) {
//                                        super.onCodeSent(s, forceResendingToken);
                                        progressBar.setVisibility(View.GONE);
                                        b.setVisibility(View.VISIBLE);
                                        Intent intent = new Intent(getApplicationContext(), otp1.class);
                                        intent.putExtra("mobile", et1.getText().toString());
                                        intent.putExtra("backendotp", backendotp);
                                        startActivity(intent);
                                    }
                                }
                        );
//                Intent intent = new Intent(getApplicationContext(), otp1.class);
//                intent.putExtra("mobile", et1.getText().toString());
//                startActivity(intent);

                    } else {
                        Toast.makeText(phoneverification.this, "please enter correct no", Toast.LENGTH_SHORT).show();
                    }
                } else {
                    Toast.makeText(phoneverification.this, "enter mobile number", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}

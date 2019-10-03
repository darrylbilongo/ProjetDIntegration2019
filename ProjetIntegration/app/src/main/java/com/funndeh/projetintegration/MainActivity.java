package com.funndeh.projetintegration;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private EditText username;
    private EditText password;
    private TextView register;
    private Button login;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        username = (EditText)findViewById(R.id.etUsr);
        password = (EditText)findViewById((R.id.etPwd));
        login = (Button)findViewById(R.id.btnLogin);
    }

    private void validate(String userName, String password){
        if(userName == "Admin" && password == "1234"){
            Intent intent = new Intent(MainActivity.this, Accueil.class);
            startActivity(intent);
        }
        else{

        }
    }

}

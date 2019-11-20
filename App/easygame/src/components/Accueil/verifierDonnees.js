import React, {Component} from 'react';

export default function verifierDonnees(userEmail, userPassword) {
    if(userEmail == "" && userPassword == ""){
      return false;
    }
    else if((userEmail == "" || userEmail.indexOf('@') == -1)){
      return false;
    }
    else if(userEmail != "" && userPassword == ""){
      return false;
    }
    return true;
}
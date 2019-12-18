import axios from 'axios';

export const register = newUser => {

    newUser.totem = "Lion";
    newUser.fonction =  "animateur";

    return axios   
        .post('https://easygame.funndeh.com/api/users/register', {
            nom : newUser.nom,
            prenom : newUser.prenom,
            email : newUser.email,
            motDePasse : newUser.motDePasse,
            dateNaissance : newUser.dateNaissance,
            estSupprime : false,
            fonction : newUser.fonction,
            idAnimateur : newUser.email
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post('https://easygame.funndeh.com/api/users/login', {
            email: user.email,
            motDePasse: user.motDePasse
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token);
            return res.data.token;
        })
        .catch(err => {
            console.log(err)
        })
}

export const ajoutEvent = (event) => {
    return axios
        .post('https://easygame.funndeh.com/api/event/add', {
            title : event.title,
            date : event.date,
            userEmail : event.userEmail
        })
        .catch(err => {
            alert("Device peut être déja attribué...Réessayez")
        })
}

export const getEvents = (userEmail) => {
    return axios
        .post('https://easygame.funndeh.com/api/event/getEvents', {
            userEmail : userEmail
        })
        .then(
            res => {
              return res.data;
            }
        )
        .catch(err => {
              alert("Ne peut pas avoir les evenements")
        })
}
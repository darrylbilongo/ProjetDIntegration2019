import axios from 'axios';

export const register = newUser => {

    newUser.totem = "Lion";
    newUser.fonction =  "animateur";

    return axios   
        .post('http://easygame.funndeh.com:5000/api/users/register', {
            nomUtilisateur : "test123",
            nom : newUser.nom,
            prenom : newUser.prenom,
            email : newUser.email,
            motDePasse : newUser.motDePasse,
            dateNaissance : newUser.dateNaissance,
            estSupprime : false,
            totem : newUser.totem,
            fonction : newUser.fonction
        })
        .then(res => {
            console.log(res.data.message);
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post('http://easygame.funndeh.com:5000/api/users/login', {
            email: user.email,
            motDePasse: user.motDePasse
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token);
            console.log(res.data.message);
            return res.data.token;
        })
        .catch(err => {
            console.log(err)
        })
}

export const ajoutEvent = (event) => {
    return axios
        .post('http://easygame.funndeh.com:5000/api/event/add', {
            title : event.title,
            date : event.date,
            userEmail : event.userEmail
        })
        .then(res => {
            console.log(res.message);
        })
        .catch(err => {
            console.log(err)
        })
}

export const getEvents = (userEmail) => {
    return axios
        .get('http://easygame.funndeh.com:5000/api/event/', {
            proprietaire : userEmail
        })
        .then(
            res => {
              console.log(res.message);
            }
        )
        .catch(err => {
              console.log(err)
        })
}
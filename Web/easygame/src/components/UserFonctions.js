import axios from 'axios';

export const register = newUser => {

    newUser.totem = "Lion";
    newUser.fonction =  "animateur";

    return axios   
        .post('http://easygame.funndeh.com/users/register', {
            nom : newUser.nom,
            prenom : newUser.prenom,
            email : newUser.email,
            motDePasse : newUser.motDePasse,
            dateNaissance : newUser.dateNaissance,
            estSupprime : false,
            fonction : newUser.fonction,
            idAnimateur : newUser.email
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
        .post('http://localhost:5000/api/users/login', {
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
        .post('https://easygame.funndeh.com/api/event/add', {
            title : event.title,
            date : event.date,
            userEmail : event.userEmail
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
}

export const getEvents = (userEmail) => {
    return axios
        .post('http://localhost:5000/api/event/getEvents', {
            userEmail : userEmail
        })
        .then(
            res => {
              console.log(res.data);
              return res.data;
            }
        )
        .catch(err => {
              console.log(err)
        })
}
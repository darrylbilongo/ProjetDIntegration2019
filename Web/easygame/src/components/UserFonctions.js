import axios from 'axios';

export const register = newUser => {
    return axios   
        .post('users/register', {
            email: newUser.email,
            nom: newUser.prenom,
            prenom: newUser.prenom,
            motDePasse: newUser.motDePasse

        })
        .then(res => {
            console.log("Registered");
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            motDePasse: user.motDePasse
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data);
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}
import axios from 'axios';

export const register = newUser => {
    return axios   
        .post('http://localhost:5000/api/users/register', {
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
        .post('http://localhost:5000/api/users/login', {
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
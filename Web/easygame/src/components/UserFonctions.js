import axios from 'axios';

export const register = newUser => {
    return axios   
        .post('http://easygame.funndeh.com:5000/api/users/register', {
            nomUtilisateur : "darryl",
            nom : newUser.nom,
            prenom : newUser.prenom,
            email : newUser.email,
            motDePasse : newUser.motDePasse,
            dateNaissance : newUser.dateNaissance,
            estSupprime : false,
            totem : "Lion",
            fonction : 'animateur'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        .then(res => {
            console.log(res);
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
            console.log(res.data);
            return res.data.token;
        })
        .catch(err => {
            console.log(err)
        })
}
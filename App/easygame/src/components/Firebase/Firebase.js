import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBunHhvnOiOOtVzd1VuQk3lvB2QWkhD4j0',
    authDomain: 'XXXX',
    databaseURL: 'https://easygame-ded14.firebaseio.com',
    projectId: 'easygame-ded14',
    storageBucket: '',
    messagingSenderId: 'XXXX',
    appId: 'XXXX'
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
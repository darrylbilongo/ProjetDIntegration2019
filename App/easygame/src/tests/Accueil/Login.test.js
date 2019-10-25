import {verifierDonnees} from "../../components/Accueil/Login";

//Tests des fonctions propres à la classe Login

//test la fonction verifierDonnees()
//Verifier si le mail et le mot de passe introduits par un utilisateur sont vides
test('un email et mot de passe manquant', () => {
    expect(verifierDonnees('', '')).toBeFalsy();    
    expect(verifierDonnees('man', '')).toBeFalsy();   
    expect(verifierDonnees('', 'manou')).toBeFalsy();   
    expect(verifierDonnees('man@gmail.com', '')).toBeFalsy();   
    expect(verifierDonnees('manuelle@gmail.com', 'manou')).toBeFalsy();
});
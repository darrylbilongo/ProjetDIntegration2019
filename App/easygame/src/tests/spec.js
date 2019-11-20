import React from "react";
import { shallow } from "enzyme";
import verifierDonnees from "../components/Accueil/verifierDonnees";

describe('Test la validité des données entrées par l\'utilisateur', () => {
    const initialData = {
        email: 'manuelle.ndamtang@yahoo.com',
        password: 'manou'
    };

    test('Detecte un email et mot de passe manquants', () => {
        expect(verifierDonnees('', '')).toBeFalsy();
    });

    test('Detecte un email introduit et mot de passe manquant', () => {
        expect(verifierDonnees(initialData.email, '')).toBeFalsy();
    });

    test('Detecte un email manquant et mot de passe introduit', () => {
        expect(verifierDonnees('', initialData.password)).toBeFalsy();
    });

    test('Detecte un email et mot de passe introduits', () => {
        expect(verifierDonnees(initialData.email, initialData.password)).toBeTruthy();
    });

});
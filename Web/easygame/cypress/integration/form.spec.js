describe('Formulaire', () => {
    beforeEach(() => {
      cy.visit('/login')
    })
  
    it('Focus sur le formulaire', () => {
      cy.focused().should('have.class', 'form-control')
    })

    it('Connection', () => {
      const email_input = "lea@gmail.com";
      const mdp_input = "hello";

      cy.get('#email_input.form-control')
        .type(email_input)
        .should('have.value', email_input)

      cy.get('#mdp_input.form-control')
        .type(mdp_input)
        .should('have.value', mdp_input)
        .type('{enter}')
    })
  })
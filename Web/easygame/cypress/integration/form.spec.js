describe('Form', () => {
    beforeEach(() => {
      cy.visit('/login')
    })
  
    it('it focuses the input', () => {
      cy.focused().should('have.class', 'form-control')
    })
  })
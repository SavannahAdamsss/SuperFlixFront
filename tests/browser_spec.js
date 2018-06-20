describe('SUPERFLIX', () => {
  it('shows correct web content', () => {
    cy.visit('/');
    // cy.get('header img').should('have.attr', 'src', '/img/');
    cy.visit('/about')
    cy.get('h1').should('have.text', 'Brochure Page');
  });
});
describe('TRUFLIX', () => {
  it('shows correct web content', () => {
    cy.visit('/');
    cy.get('header img').should('have.attr', 'src', '/img/truflix.98c68506.png');
    cy.visit('/about')
    cy.get('h1').should('have.text', 'Brochure Page');
  });
});
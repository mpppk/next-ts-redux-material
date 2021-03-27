describe('Increment and Decrement', () => {
  it('clicking "increment" and "decrement" button changes the count', () => {
    cy.visit('http://localhost:3000')
    cy.contains('+1').click().click()
    cy.contains('Count:').children('span')
      .should('have.text', '2')

    cy.contains('-1').click()
    cy.contains('Count:').children('span')
      .should('have.text', '1')

    cy.contains('+1 later').click()
    cy.contains('Count:').children('span')
      .should('have.text', '2')
  })
})

describe('Show About page', () => {
  it('show about page', () => {
    cy.visit('http://localhost:3000')
    cy.get('button[aria-label="menu"]').click()
    cy.contains('About').click()
    cy.url().should('include', '/about')
    cy.get('h2:first-of-type').should('have.text', 'About')
  })
})

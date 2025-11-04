describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dizzydrwaf.github.io/pwa-tilt-ball-game/')
    cy.get('body')
      .should('have.css', 'background-image')
      .then(bg => {
        cy.log('Computed background:', bg)
        const expected =
          'radial-gradient(circle, rgb(30, 30, 30), rgb(0, 0, 0))'
        expect(bg.replace(/\s+/g, ' ').trim()).to.eq(expected)
        })
  })
})

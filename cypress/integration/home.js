describe("Testing of Cypress page", () => {

    it("Verify navigation to the correct URL", () => {
        cy.visit(`https://cypress.io/features`);
        cy.location("pathname").should('eq', '/features123/');
    });

    /*it("Count of number of links displayed", function() {
        const links = cy.get('.PartialSearchResults-results>.PartialSearchResults-item');
        links.should("have.length", 81);
    });
*/
});
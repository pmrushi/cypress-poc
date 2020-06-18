describe("Testing of partial-search-results component 1", function() {

    it("Verify navigation to the correct URL", function(){
        cy.visit(`searchResults`);
        cy.location("pathname").should("eq", "/searchResults");
    });

    it("Count of number of links displayed", function() {
        const links = cy.get('.PartialSearchResults-results>.PartialSearchResults-item');
        links.should("have.length", 81);
    });

});
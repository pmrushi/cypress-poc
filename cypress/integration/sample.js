describe("Testing of partial-search-results component 2", function() {

    it("Verify testing ", function(){
        cy.visit(`searchResults`);
        cy.location("pathname").should("eq", "/searchResults");
    });

    it("Count of number of links to be xxxxxx", function() {
        const links = cy.get('.PartialSearchResults-results>.PartialSearchResults-item');
        links.should("have.length", 8);
    });

});
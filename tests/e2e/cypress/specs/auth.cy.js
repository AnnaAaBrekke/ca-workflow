describe("Login and logout", () => {
    beforeEach(() => {
        cy.visit("./");
    });

    it("should log in the user with valid credentials and then log out using logout button", () => {
        
        // Custom login command created in /support/command.js
        cy.login();

        cy.get("button[data-auth='logout']").should("be.visible");
        cy.get("button[data-auth='logout']").click();

        cy.url().should("not.include", "profile");

        cy.window().then((win) => {
            expect(win.localStorage.getItem("accessToken")).to.be.null;
        });
    });
});

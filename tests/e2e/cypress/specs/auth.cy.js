// "type": "module",script!!!!!

describe("Login and logout", () => {
    beforeEach(() => {
        cy.visit("./");
    });

    it("should log in the user with valid credentials", () => {
        // Custom login command
        cy.login();
    });

    it("should log out the user when clicking the logout button", () => {
        cy.wait(500);

        cy.login();

        cy.get('button[data-auth="logout"]').should("be.visible");

        cy.get('button[data-auth="logout"]').click();
    });
});

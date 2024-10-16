describe("Login and logout", () => {
    beforeEach(() => {
        cy.visit("./");
    });

    it("should log in the user with valid credentials", () => {
        // Login custom command is to find in /tests/e2e/cypress/support/command.js
        cy.login();
    });

    it("should log out the user with the logout button", () => {
        cy.wait(1000);
        cy.login();

        cy.get("button[data-auth='logout']").click();

        cy.wait(2000);

        cy.url().should("not.include", "profile");
        cy.wait(500);

        cy.window().then((win) => {
            expect(win.localStorage.getItem("accessToken")).to.be.null;
        });
    });
});

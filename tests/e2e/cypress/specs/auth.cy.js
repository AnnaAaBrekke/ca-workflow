describe("Login and logout", () => {
    beforeEach(() => {
        cy.visit("./");
    });

    it("should log in the user with valid credentials", () => {
        // Login custom command is to find
        cy.login();
    });

    it.skip("should log out the user and clear the access token", () => {
        cy.login();

        cy.get("button[data-auth='logout']").click();

        cy.url().should("not.include", "profile");

        cy.window().then((win) => {
            expect(win.localStorage.getItem("accessToken")).to.be.null;
        });
    });
});

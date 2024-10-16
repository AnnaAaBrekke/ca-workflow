describe("Invalid login attempts", () => {
    beforeEach(() => {
        cy.visit("./");
        Cypress.on("uncaught:exception", (err) => {
            if (err.message.includes("Invalid credentials")) {
                return false;
            }
        });
    });
    it("should show an error message for invalid login credentials", () => {
        cy.intercept(
            "POST",
            `${Cypress.env("API_BASE_URL")}/social/auth/login`,
            {
                statusCode: 401,
                body: {
                    message: "Invalid credentials",
                },
            }
        ).as("invalidLoginRequest");

        cy.get("#registerModal").should("be.visible");
        cy.wait(500);

        cy.get("#registerForm button[data-auth='login']").click();

        cy.get("#loginModal").should("be.visible");
        cy.wait(500);

        // Enter invalid email and password
        cy.get("#loginForm #loginEmail").type(Cypress.env("userEmail")); // valid email from environment variable
        cy.get("#loginForm #loginPassword").type("wrongPassword"); // invalid password
        cy.wait(500);

        cy.window().then((win) => {
            cy.stub(win, "alert").as("alertStub");
        });

        cy.get("#loginForm button[type='submit'].btn-success").click();

        cy.wait("@invalidLoginRequest")
            .its("response.statusCode")
            .should("eq", 401);

        cy.get("@alertStub").should(
            "be.calledWith",
            "Either your username was not found or your password is incorrect"
        );
    });
});

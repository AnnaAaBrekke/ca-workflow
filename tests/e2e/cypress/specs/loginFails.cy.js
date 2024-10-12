describe("Invalid login attempts", () => {
    beforeEach(() => {
        cy.visit("./");
    });

    it.skip("should show an error message for invalid login credentials", () => {
        // Intercept the login API call and mock a 401 response
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
        cy.get("#loginForm #loginEmail").type("invaliduser@noroff.no");
        cy.get("#loginForm #loginPassword").type("wrongPassword");
        cy.wait(500);

        // Stub the window.alert before clicking the submit button
        cy.window().then((win) => {
            cy.stub(win, "alert").as("alertStub");
        });

        // Click on the submit button
        cy.get("#loginForm button[type='submit'].btn-success").click();

        // Wait for the API call and assert the 401 response
        cy.wait("@invalidLoginRequest")
            .its("response.statusCode")
            .should("eq", 401);

        // Assert that the alert is called with the correct message
        cy.get("@alertStub").should("be.calledWith", "Invalid credentials");
    });
});

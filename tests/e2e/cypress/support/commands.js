Cypress.Commands.add("login", () => {
    cy.intercept("POST", `${Cypress.env("API_BASE_URL")}/social/auth/login`, {
        statusCode: 200,
        body: {
            accessToken: "fakeAccessToken",
            name: "E2E User",
        },
    }).as("loginRequest");

    cy.get("#registerModal").should("be.visible");
    cy.wait(500);

    cy.get('#registerForm button[data-auth="login"]').click();

    cy.get("#loginModal").should("be.visible");

    cy.wait(500);

    cy.get("#loginForm #loginEmail").type(Cypress.env("userEmail"));
    cy.get("#loginForm #loginPassword").type(Cypress.env("userPassword"));

    cy.wait(500);

    cy.get("#loginForm button[type='submit'].btn-success").click();

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);
    cy.url().should("include", "profile");

    cy.intercept("GET", `${Cypress.env("API_BASE_URL")}/social/profiles/**`, {
        statusCode: 200,
        body: {
            name: "E2E User",
            followers: [],
            following: [],
            posts: [],
        },
    }).as("getProfile");

    cy.wait("@getProfile").its("response.statusCode").should("eq", 200);
});

// describe("Login and logout", () => {
//     beforeEach(() => {
//         cy.visit("./");
//     });

//     it("should log in the user with valid credentials", () => {
//         // Intercept the login API call
//         cy.intercept(
//             "POST",
//             `${Cypress.env("API_BASE_URL")}/social/auth/login`,
//             {
//                 statusCode: 200,
//                 body: {
//                     accessToken: "fakeAccessToken",
//                     name: "E2E User",
//                 },
//             }
//         ).as("loginRequest");

//         cy.get("#registerModal").should("be.visible");
//         cy.wait(500);
//         cy.get('#registerForm button[data-auth="login"]').click();

//         cy.get("#loginModal").should("be.visible");
//         cy.wait(500);

//         cy.get("#loginForm #loginEmail").type("e2euser@noroff.no");
//         cy.get("#loginForm #loginPassword").type("e2ePassword");

//         cy.wait(500);
//         cy.get("#loginForm button[type='submit'].btn-success").click();

//         cy.url().should("include", "profile");
//     });

//     it("should log out the user with the logout button", () => {
//         cy.get('button[data-auth="logout"]').should("be.visible");

//         cy.get('button[data-auth="logout"]').click();

//         cy.url().should("eq", "/");
//     });
// });

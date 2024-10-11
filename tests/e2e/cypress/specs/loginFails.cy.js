// describe("Invalid login attempts", () => {
//     beforeEach(() => {
//         cy.visit("./");
//     });

//     it("should show an error message for invalid login credentials", () => {
//         cy.intercept(
//             "POST",
//             `${Cypress.env("API_BASE_URL")}/social/auth/login`,
//             {
//                 statusCode: 401,
//                 body: {
//                     message: "Invalid credentials",
//                 },
//             }
//         ).as("invalidLoginRequest");

//         cy.get("#registerModal").should("be.visible");
//         cy.wait(500);

//         cy.get('#registerForm button[data-auth="login"]').click();

//         cy.get("#loginModal").should("be.visible");

//         cy.wait(500);

//         cy.get("#loginForm #loginEmail").type("invaliduser@noroff.no");
//         cy.get("#loginForm #loginPassword").type("wrongPassword");

//         cy.wait(500);

//         cy.get("#loginForm button[type='submit'].btn-success").click();

//         cy.wait("@invalidLoginRequest")
//             .its("response.statusCode")
//             .should("eq", 401);

//         // Custom handling for window alert - need to adjust this
//         cy.window().then((win) => {
//             cy.stub(win, "alert").as("Invalid creditentials used to log in"); // Stub window.alert to test its invocation
//         });
//     });
// });

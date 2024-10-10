// describe("Login fails", () => {
//     beforeEach(() => {
//         cy.visit("./");
//     });
//     it("should submit the login form with invalid credentials and show a message", () => {
//         cy.get("#registerModal").should("be.visible");
//         cy.wait(500);
//         cy.get('#registerForm button[data-auth="login"]').click();

//         cy.get("#loginModal").should("be.visible");
//         cy.wait(500);

//         cy.get("#loginForm #loginEmail").type("invalid.email@noroff.no");
//         cy.get("#loginForm #loginPassword").type("wrongPassowrd");

//         cy.get("#loginForm button[type='submit'].btn-success").click();

//         cy.on("window:alert", (txt) => {
//             expect(txt).to.contains(
//                 "Either your username was not found or your password is incorrect"
//             );
//         });
//     });
// });

// describe("Login functionality", () => {
//     beforeEach(() => {
//         cy.visit("/"); // Adjust this URL if necessary
//     });

//     it("should let the user log in with the login form with valid credentials", () => {
//         // Check if the registration modal is open, if so, close it
//         cy.get("#registerModal").then(($modal) => {
//             if ($modal.is(":visible")) {
//                 // Close the registration modal if it's visible
//                 cy.get("#registerModal .btn-close").click(); // Adjust selector if needed
//             }
//         });
//         // cy.get('button[data-bs-toggle="modal"]').contains("Login").click(); // Adjust selector if necessary

//         // Ensure the modal is visible before trying to fill in the form
//         // cy.get("#loginModal").should("be.visible");

//         // Fill in the login form
//         // cy.get("#loginForm #loginEmail").type("testuser@stud.noroff.no"); // Replace with a valid test email
//         // cy.get("#loginForm #loginPassword").type("validpassword"); // Fixed syntax error
//     });
// });

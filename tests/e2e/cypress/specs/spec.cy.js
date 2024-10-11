// // describe("template spec", () => {
// //     it("passes", () => {
// //         cy.visit("https://example.cypress.io");
// //     });
// // });

// it("should log out the user with the logout button", () => {
//   // Simulate user login by setting the token in local storage
//   cy.window().then((win) => {
//       win.localStorage.setItem("token", "fakeAccessToken");
//       win.localStorage.setItem(
//           "profile",
//           JSON.stringify({ name: "E2E User" })
//       );
//   });

//   // Visit the page after "login"
//   cy.visit("./");

//   // Ensure the logout button is visible
//   cy.get('button[data-auth="logout"]').should("be.visible");

//   // Click the logout button
//   cy.get('button[data-auth="logout"]').click();

//   // Ensure the user is redirected to the home page
//   cy.url().should("eq", "/");

//   // Verify that the token is removed from localStorage
//   cy.window().then((win) => {
//       expect(win.localStorage.getItem("token")).to.be.null;
//   });
// });

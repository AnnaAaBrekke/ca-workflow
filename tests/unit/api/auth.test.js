import { login } from "../../../src/js/api/auth/login";
import { logout } from "../../../src/js/api/auth/logout";
import * as storage from "../../../src/js/storage"; // Import the entire storage module

// Mock the storage module
jest.mock("../../../src/js/storage", () => ({
    save: jest.fn(),
    load: jest.fn(),
    remove: jest.fn(),
}));
describe("Auth functions", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear all mock function calls before each test
    });

    // TEST FOR ERROR RESPONSE - BUT DP NOT NEED IT I THINK --> but turns it to 100%
    test("should throw an error if the API response is not ok", async () => {
        console.log("Starting the login error test...");

        // Mock the fetch API to simulate a failed login response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                statusText: "Unauthorized", //FAILED
            })
        );

        // Call the login function with invalid credentials
        await expect(
            login("invalid@noroff.no", "wrong-password")
        ).rejects.toThrow("Unauthorized");

        console.log("Login error test finished!");
    });

    describe("Login function", () => {
        test("should store token in storage when valid credentials are provided", async () => {
            console.log("Starting the login test...");

            // Mock the fetch API to simulate a successful login response
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () =>
                        Promise.resolve({
                            accessToken: "mock-token",
                            name: "test-user",
                        }),
                })
            );

            // Mock to simulate no token initially in the storage
            storage.load.mockReturnValueOnce(null);

            console.log("Calling login function...");

            // Call the login function with valid credentials
            await login("test@noroff.no", "password12345");

            console.log("Login function called, checking expectations...");

            // Check that the token was stored correctly
            expect(storage.save).toHaveBeenCalledWith("token", "mock-token");

            // Verify that the fetch function was called with correct arguments
            expect(fetch).toHaveBeenCalledWith(
                "https://nf-api.onrender.com/api/v1/social/auth/login",
                expect.objectContaining({
                    method: "post",
                    body: JSON.stringify({
                        email: "test@noroff.no",
                        password: "password12345",
                    }),
                    headers: expect.any(Object),
                })
            );

            console.log("Login test finished!");
        });
    });

    describe("Log out function", () => {
        test("should clear the token from browser storage", () => {
            console.log("Starting the logout test..");
            logout();
            console.log("Call the logout function");
            expect(storage.remove).toHaveBeenCalledWith("token");
            expect(storage.remove).toHaveBeenCalledWith("profile");

            console.log("Logout test finished!");
        });
    });
});

const { login } = require("../../../src/js/api/auth/login");
const { logout } = require("../../../src/js/api/auth/logout");
const storage = require("../../../src/js/storage");

// Mock the storage module
jest.mock("../../../src/js/storage", () => ({
    save: jest.fn(),
    load: jest.fn(),
    remove: jest.fn(),
}));

describe("Auth functions", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("Login function", () => {
        test("should store token in storage when valid credentials are provided", async () => {
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

            // Valid credentials
            await login(
                process.env.JEST_USER_EMAIL,
                process.env.JEST_USER_PASSWORD
            );

            // Checks that the token was stored correctly
            expect(storage.save).toHaveBeenCalledWith("token", "mock-token");

            // Verify that the fetch function was called with correct arguments
            expect(fetch).toHaveBeenCalledWith(
                `${process.env.API_BASE_URL}/social/auth/login`,
                expect.objectContaining({
                    method: "post",
                    body: JSON.stringify({
                        email: process.env.JEST_USER_EMAIL,
                        password: process.env.JEST_USER_PASSWORD,
                    }),
                    headers: expect.any(Object),
                })
            );
        });
    });

    describe("Logout function", () => {
        test("should clear the token from browser storage", () => {
            logout();
            expect(storage.remove).toHaveBeenCalledWith("token");
            expect(storage.remove).toHaveBeenCalledWith("profile");
        });
    });
});

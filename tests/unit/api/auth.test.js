const { login } = require("../../../src/js/api/auth/login");
const { logout } = require("../../../src/js/api/auth/logout");
const storage = require("../../../src/js/storage");

// Mocking the storage module
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
            // Mocking the fetch API to simulate a successful login response
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

            storage.load.mockReturnValueOnce(null);

            await login(
                process.env.JEST_USER_EMAIL,
                process.env.JEST_USER_PASSWORD
            );

            expect(storage.save).toHaveBeenCalledWith("token", "mock-token");

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

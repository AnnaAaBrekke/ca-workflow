import { login } from "../../../src/js/api/auth/login.js";
import * as storage from "../../../src/js/storage";

jest.mock("../../../src/js/storage", () => ({
    save: jest.fn(),
    load: jest.fn(),
}));

describe("Login function", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("login function stores a token when provided with valid credentials", async () => {
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

        await login("test@noroff.no", "password12345");

        expect(storage.save).toHaveBeenCalledWith("token", "mock-token");

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
    });
});

// //Example test

// // Mock the browser's localStorage was copied from chatGPT
// const localStorageMock = (() => {
//     let store = {};

//     return {
//         getItem: (key) => store[key] || null,
//         setItem: (key, value) => {
//             store[key] = value.toString();
//         },
//         removeItem: (key) => {
//             delete store[key];
//         },
//         clear: () => {
//             store = {};
//         },
//     };
// })();

// Object.defineProperty(global, "localStorage", { value: localStorageMock });

// test("Logout function test", () => {
//     //Fake items in local storage

//     //call function

//     //expect
//     expect(localStorage.getItem("token")).toBeNull();
//     expect(localStorage.getItem("profile")).toBeNull();
// })

// _________

// import { apiPath } from "../constants.js";
// import { headers } from "../headers.js";
// import { save } from "../../storage/index.js";

// export async function login(email, password) {
//     const response = await fetch(`${apiPath}/social/auth/login`, {
//         method: "post",
//         body: JSON.stringify({ email, password }),
//         headers: headers("application/json"),
//     });

//     if (response.ok) {
//         const profile = await response.json();
//         save("token", profile.accessToken);
//         delete profile.accessToken;
//         save("profile", profile);
//         return profile;
//     }

//     throw new Error(response.statusText);
// }
// import { remove } from "../../storage/index.js";

// export function logout() {
//     remove("token");
//     remove("profile");
// }

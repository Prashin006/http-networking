import { generateKey } from "../1-HTTP/0-utilities.js";

const api_key = generateKey();
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";
const users = await getUsers(url, api_key);

export const logUsers = (users) => {
    for (const user of users) {
        console.log(
            `Username: ${user.user.name}, Role: ${user.role}, Experience: ${user.experience}, Remote: ${user.remote}`
        );
    }
};

// logUsers(users);

export async function getUsers(url, apiKey) {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json",
        },
    });
    return response.json();
}

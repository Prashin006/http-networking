import { generateKey } from "../1-HTTP/0-utilities.js";

const logUser = (user) => {
    console.log(
        `username: ${user.user.name}, role: ${user.role}, experience: ${user.experience}, remote: ${user.remote}`
    );
};

const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";
const userId = "2f8282cb-e2f9-496f-b144-c0aa4ced56db";
const api_key = generateKey();

async function getUserById(baseUrl, apiKey, id) {
    const path = `${baseUrl}/${id}`;
    const response = await fetch(path, {
        method: "GET",
        mode: "cors",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json",
        },
    });
    return response.json();
}

async function updateUser(baseUrl, apiKey, id, userObj) {
    const path = `${baseUrl}/${id}`;
    const response = await fetch(path, {
        method: "PUT",
        mode: "cors",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
    });
    return response.json();
}

const userData = await getUserById(url, api_key, userId);
logUser(userData);
console.log();

userData.user.name = "Tech With Tim";
userData.experience = 10;
userData.remote = true;

const updatedUser = await updateUser(url, api_key, userId, userData);
console.log("The updated user is as follows:");
logUser(updatedUser);

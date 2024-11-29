import { generateKey } from "../1-HTTP/0-utilities.js";
import { getUsers } from "./1-get.js";

const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";
const api_key = generateKey();
const userId = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";

async function deleteUser(baseUrl, apiKey, id) {
    const path = `${baseUrl}/id`;
    const response = await fetch(path, {
        method: "DELETE",
        mode: "cors",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json",
        },
    });
}

function logUsers(users) {
    console.log("Logging user records:");
    for (const user of users) {
        console.log(
            `User name: ${user.user.name}, Role: ${user.role}, experience: ${user.experience}, Remote: ${user.remote}`
        );
    }
}

const users = await getUsers(url, api_key);
logUsers(users);

console.log();

await deleteUser(url, api_key, userId);
console.log(`Deleted user with id ${userId}`);

const newUsers = await getUsers(url, api_key);
logUsers(newUsers);

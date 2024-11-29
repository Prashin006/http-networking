import { generateKey } from "../1-HTTP/0-utilities.js";
import { getUsers, logUsers } from "./1-get.js";

async function createUser(url, apiKey, data) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

const userToCreate = {
    role: "Junior Developer",
    experience: 2,
    remote: true,
    user: {
        name: "Prashin Parikh",
        location: "IND",
        age: 29,
    },
};

const api_key = generateKey();
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

console.log("Retrieving user data...");
const userDataFirst = await getUsers(url, api_key);
logUsers(userDataFirst);
console.log();

const response = await createUser(url, api_key, userToCreate);
console.log(`Created user response: ${JSON.stringify(response)}`);

console.log("Retrieving fresh user data..");
const userDataSecond = await getUsers(url, api_key);
logUsers(userDataSecond);

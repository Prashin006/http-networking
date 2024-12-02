import { generateKey } from "../1-HTTP/0-utilities.js";

const baseUrl = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";
const api_key = generateKey();

const users = await getUsers(baseUrl, api_key);
for (const user of users) {
    console.log(
        `Got user with name: ${user.user.name} & experience: ${user.experience}`
    );
}

async function getUsers(url, apiKey) {
    const fullUrl = `${url}?sort=experience`;
    const response = await fetch(fullUrl, {
        method: "GET",
        mode: "cors",
        headers: {
            "X-API-Key": apiKey,
        },
    });
    return response.json();
}

import { generateKey } from "../1-HTTP/0-utilities.js";

const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users/";
const api_key = generateKey();

async function getUserCode(url, apiKey, id) {
    const path = url + id;
    const response = await fetch(path, {
        method: "GET",
        mode: "cors",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json",
        },
    });
    return response.status;
}

const invalidId = "invalid id";
const id = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";

console.log("First");
const first = await getUserCode(url, api_key, invalidId);
console.log(`id: ${invalidId}, status code: ${first}`);

console.log();

console.log("Second");
const second = await getUserCode(url, api_key, id);
console.log(`id: ${id}, status code: ${second}`);

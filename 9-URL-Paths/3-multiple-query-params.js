import { generateKey } from "../1-HTTP/0-utilities.js";

async function fetchTasks(baseURL, availability, apiKey) {
    let limit;
    if (availability == "Low") limit = 1;
    else if (availability == "Medium") limit = 3;
    else if (availability == "High") limit = 5;

    const fullURL = `${baseURL}?sort=estimate&limit=${limit}`;
    const response = await fetch(fullURL, {
        method: "GET",
        mode: "cors",
        headers: {
            "X-API-Key": apiKey,
        },
    });
    return response.json();
}

const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/issues";
const api_key = generateKey();

const lowIssues = await fetchTasks(url, "Low", api_key);
console.log("Getting issues for low availability user...");
for (const issue of lowIssues) {
    console.log(`Issue: ${issue.title} - estimate: ${issue.estimate}`);
}
console.log();

const mediumIssues = await fetchTasks(url, "Medium", api_key);
console.log("Getting issues for medium availability user...");
for (const issue of mediumIssues) {
    console.log(`Issue: ${issue.title} - estimate: ${issue.estimate}`);
}
console.log();

console.log("Getting issues for high availability user...");
const highIssues = await fetchTasks(url, "High", api_key);
for (const issue of highIssues) {
    console.log(`Issue: ${issue.title} - estimate: ${issue.estimate}`);
}

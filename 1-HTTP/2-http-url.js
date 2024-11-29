import { generateKey, logIssues } from "./0-utilities.js";

const issueURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/issues";
// const key = generateKey();
// console.log(key);

const issues = await getData(issueURL);
logIssues(issues);

async function getData(url) {
    const api_key = generateKey();
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "X-API-Key": api_key,
            "Content-Type": "application/json",
        },
    });
    return response.json();
}

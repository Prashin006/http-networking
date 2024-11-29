import { logIssues, generateKey } from "./0-utilities.js";

const issues = await getIssueData();

logIssues(issues);

async function getIssueData() {
    const api_key = generateKey();
    const response = await fetch(
        "https://api.boot.dev/v1/courses_rest_api/learn-http/issues",
        {
            method: "GET",
            mode: "cors",
            headers: {
                "X-API-Key": api_key,
                "Content-Type": "application/json",
            },
        }
    );
    return response.json();
}

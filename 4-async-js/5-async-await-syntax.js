import { logIssues, getSettings } from "../1-HTTP/0-utilities.js";

const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/issues";

async function getIssueData() {
    const response = await fetch(url, getSettings());
    return response.json();
}

const issues = await getIssueData();

logIssues(issues);

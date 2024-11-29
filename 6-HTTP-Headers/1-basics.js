import { getSettings } from "../1-HTTP/0-utilities.js";

const domain = "api.boot.dev";

const issues = await getIssueData(domain);
logContentType(issues);

async function getIssueData(domain) {
    const url = `https://${domain}/v1/courses_rest_api/learn-http/issues/0194fdc2-fa2f-4cc0-81d3-ff12045b73c8`;
    const response = await fetch(url, getSettings());
    return response;
}

function logContentType(resp){}
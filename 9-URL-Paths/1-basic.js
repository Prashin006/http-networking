import { generateKey } from "../1-HTTP/0-utilities.js";

async function getResources(path) {
    const fullURL = `https://api.boot.dev${path}`;

    const response = await fetch(fullURL, {
        method: "GET",
        mode: "cors",
        headers: {
            "X-API-Key": generateKey(),
            "Content-Type": "application/json",
        },
    });
    return response.json();
}

const projects = await getResources("/v1/courses_rest_api/learn-http/projects");
console.log("Projects:");
logResources(projects);
console.log(" --- ");

const issues = await getResources("/v1/courses_rest_api/learn-http/issues");
console.log("Issues:");
logResources(issues);
console.log(" --- ");

const users = await getResources("/v1/courses_rest_api/learn-http/users");
console.log("Users:");
logResources(users);

function logResources(resources) {
    for (const resource of resources) {
        console.log(` - ${JSON.stringify(resource)}`);
    }
}

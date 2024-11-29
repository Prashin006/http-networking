export function generateKey() {
    const characters = "ABCDEF0123456789";
    let result = "";
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.random() * characters.length);
    }
    return result;
}

export function logIssues(issues) {
    for (const issue of issues) {
        console.log(issue.title);
    }
}

export function getURL() {
    return "https://api.boot.dev/v1/courses_rest_api/learn-http/issues";
}

export function getSettings() {
    const api_key = generateKey();
    return {
        method: "GET",
        mode: "cors",
        headers: {
            "X-API-Key": api_key,
            "Content-Type": "application/json",
        },
    };
}

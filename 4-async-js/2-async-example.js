const projectCompleteWait = 8000;
const ciWait = 4000;
const repoCreationWait = 2000;
const boardConfigWait = 6000;

// Order in which it must print and everything must be printed after a delay of 2 seconds
// 1. Starting project initialization...
// 2. Creating project repository...
// 3. Setting up continuous integration...
// 4. Configuring project boards...
// 5. Project setup complete!

// Don't touch below this line

setTimeout(() => console.log("Project setup complete!"), projectCompleteWait);
setTimeout(() => console.log("Setting up continuous integration..."), ciWait);
setTimeout(
    () => console.log("Creating project repository..."),
    repoCreationWait
);
setTimeout(() => console.log("Configuring project boards..."), boardConfigWait);

console.log("Starting project initialization...");

await sleep(2500);
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

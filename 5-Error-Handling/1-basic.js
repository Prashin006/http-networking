try {
    printUserExperience(4);
    printUserExperience("ten");
    printUserExperience(10);
} catch (err) {
    // console.log(`An error was thrown: ${err}`);
    console.log(`An error was thrown: ${err.message}`);
}

function printUserExperience(level) {
    if (isNaN(level)) {
        throw new Error("Parameter is not a Number!");
    }
    console.log(`The user has ${level} years of experience!`);
}

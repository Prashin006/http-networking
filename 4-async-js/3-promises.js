const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (getRandomBool()) {
            resolve("Resolved!");
        } else {
            reject("Rejected!!!");
        }
    }, 1000);
});

function getRandomBool() {
    return Math.random() < 0.5;
}

promise
    .then((message) => {
        console.log(`The promise has ${message}`);
    })
    .catch((message) => {
        console.log(`The promise has ${message}`);
    });

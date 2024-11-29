function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const updateTaskStatus = (taskId, currentStatus, isCompleted) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (currentStatus == "In Progress") {
                if (isCompleted == true) {
                    resolve(`Task ${taskId} has been completed successfully!`);
                } else {
                    reject(
                        `Task ${taskId} is in progress and cannot be completed!`
                    );
                }
            } else {
                resolve(`Task ${taskId} status updated to ${currentStatus}`);
            }
        }, 1000);
    });
};

function runUpdateTaskStatus(taskId, currentStatus, isCompleted) {
    console.log(`updating task ${taskId} with ${currentStatus}...`);
    updateTaskStatus(taskId, currentStatus, isCompleted)
        .then((message) => {
            console.log(`updateTaskStatus resolved with ${message}`);
        })
        .catch((message) => {
            console.log(`updateTaskStatus rejected with ${message}`);
        });
}

runUpdateTaskStatus("1", "In Progress", true);
await sleep(2000);

runUpdateTaskStatus("2", "In Progress", false);
await sleep(2000);

runUpdateTaskStatus("3", "Code Review", true);
await sleep(2000);

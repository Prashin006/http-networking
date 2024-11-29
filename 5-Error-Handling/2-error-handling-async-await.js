try {
    const users = await fetchLeaderBoard();
} catch (err) {
    console.log("Our servers are down, but we will be up and running soon!");
}

async function fetchLeaderBoard() {
    const url = "https://jello.servers";    // demo url
    const response = await fetch(url);
    return response.json();
}

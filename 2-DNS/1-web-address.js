async function fetchIPAddress(domain) {
    const url = `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`;
    const response = await fetch(url, {
        headers: {
            accept: "application/dns-json",
        },
    });
    const responseObject = await response.json();
    // console.log("This is the IP Address ", responseObject["Answer"][0]["data"]);
    return responseObject.Answer[0].data;
}

const domain = "example.com";
const ipAddress = await fetchIPAddress(domain);
if (!ipAddress)
    console.log(
        `There was an error fetching the IP Address of ${domain} : ${ipAddress}`
    );
else console.log(`Found IP Address for ${domain} : ${ipAddress}`);

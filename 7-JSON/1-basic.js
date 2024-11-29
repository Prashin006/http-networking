const obj = {
    movies: [
        {
            id: 1,
            rating: 9.5,
            name: "DDLJ",
        },
        {
            id: 2,
            rating: 9,
            name: "Karan Arjun",
        },
    ],
};

// console.log(typeof obj);
// console.log(obj);

const objStr = JSON.stringify(obj);

console.log(typeof objStr);
console.log(objStr);

const objParsed = JSON.parse(objStr);

console.log(typeof objParsed);
console.log(objParsed);

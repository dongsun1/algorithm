// 달팽이는 올라가고 싶다
let inputs = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = Number(inputs[0]);
const B = Number(inputs[1]);
const V = Number(inputs[2]);

console.log(Math.ceil((V - B) / (A - B)));

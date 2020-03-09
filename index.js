let x = 10;
let y = 5;
console.log(x + y);
console.log(x -+ y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
//Pre-increment
console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);
//Post-increment
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);
console.log(x++);


let r = 10;
let s = 6;

console.log("pre")

r = --s;
console.log(r);
console.log(s);


console.log("post")

r = s--;
console.log(r)
console.log(s)

for(let i = 0; i <= 10; i++){
console.log(i)
}

const firstword = "Hello";
const secondword = "World";

console.log(firstword + secondword);
console.log(`${firstword} ${secondword}`)
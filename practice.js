let a = [39, 41, 3, 33, 55, 22, 77, 123, 345, 3];
let b = a.slice(3, 4);
let c = a.splice(3, 4);
let d = a.sort(function(a, b) {
    return a - b;
});
let e = a.reverse();
console.log(b);
console.log(c);
//console.log(a);
//console.log(d);
//console.log(e);
console.log(d);
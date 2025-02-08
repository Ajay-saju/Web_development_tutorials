document.getElementsByClassName("greeting")[0].innerHTML = "Welcome to java script tutorial "


var a = 10 ;
a = "hi";
// console.log(a);
// const s1 = Symbol("AJAY");
// console.log(s1);
// console.log(s1.description);

// const symKey = Symbol('uniqueKey');
// const obj = {
//     [symKey]: '123qwe?><'
// };
// console.log(obj[symKey]);

let sum = function  (a,b){
    console.log(a+b);

}
console.log(sum(10,20));

let greet = (names)=> `Hello, ${names}!`;
console.log(greet("ajay"));
const person = {
    name : "ajay",
    age : 30,
    city: "Kozhikkode"
}
console.log(person["age"]);
function myEvent(){

    document.getElementById("event1").innerHTML ="Welcome to events in javascript ";
}
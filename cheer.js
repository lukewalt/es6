
const first = "luke";
const last = "walt";

const myName = {first, last}

const cheer = ({first, last}) => {
  //loops over arr
  let upprname = `${first} ${last}`.toUpperCase();
  for (let elem of [...first, ...last]) {
    //conditional ternary operator
    let tern = 'aeioufhlmnrsx'.includes(elem.toLowerCase()) ? 'an' : 'a'
    console.log(`Give me ${tern} ${elem.toUpperCase()}!`);
  }
  console.log(`whats that spell?\n${upprname}`);
}

cheer(myName)




//--------  NOTES -----------------------

// function func1() {
//   if (true) {
//     let tmp = 123
//   }
//   console.log("func tmp", tmp);
// }
//
// (function funct2() {
//   let foo = 5
//   if (true) {
//     let foo = 10
//     // console.log("foo inside of block", foo);
//   }
//   // console.log("funct2 with let", foo);
// }());
//
// const MAX_CAT_SIZE = { weight: 3000 };
// MAX_CAT_SIZE.height = 5000
// // console.log(MAX_CAT_SIZE);
//
// var reflect = function(value) {
//   return value;
// }
//
// const reflect = value => value // single arg and one block
// const reflect = (value, num) => value //two arguments or more requires parens
// const reflect = () => 1+2 //no arguments requires parens
//
//
// var numbers = [1,2,3,4,5];
//
// var timesTwo = numbers.map(function (num) {
//   return num * 2
// });
//
// let timesTwo = numbers.map((num) => num * 2)
// // console.log(timesTwo);
//
//
//
//
// const wow = 'hi there',
//       es6 = 'es6',
//       myNum = () => console.log('howdy');
//
//
// let myoldOBJ = {
//   wow: wow,
//   es6: es6,
//   myNum: myNum
// }
//
// let myNewOBJ = {wow, es6, myNum}
// // console.log("myNewOBJ", myNewOBJ);
//
//
//
// const dog = {
//   name: "mutph",
//   breed: 'aussie',
//   speak: () => "woof"
// }
//
//
// const {name: myName, speak} = dog;
// // console.log("mydogsname", myName, "mydogspeaks", speak());
//
// const [a,b] = [5,10];
// // console.log("a and b", a, b);
//
//
// let x = [1,2,3,4,5];
// let [y,z, ...theothers] = x
// // console.log(theothers);
//
// let countries = ['Moldova', 'Ukraine']
// let otherCountries = ['USA', 'Japan']
//
//
// let meldedCountries =  [...countries, ...otherCountries]
// // console.log('meldedCountries', meldedCountries);
// // console.log('countries', countries);
//
// //for of loop
// for (let [index, elem] of arr ) {
//   // console.log(elem);
// }

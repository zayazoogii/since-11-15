// console.log("Hi");
// let fomatted = true;
// console.log(fomatted);
// //ene bol test
// console.log(22);
// const name = "Zaya";
// let x = 1;
// x = x + 1;
// let phoneNumber = 88102549;

// let age = 25;
// console.log(typeof age);
// console.log(name);
// console.log(phoneNumber);
// console.log(34);
// console.log(x);

// let number = 643;
// 13;
// let firstNumber = number / 100;
// let secondNumber = (number / 10) % 10;
// let thirdNumber = number % 10;
// console.log(firstNumber + secondNumber + thirdNumber);

// let ordinalNumber = 234;

// if (ordinalNumber % 2 == 0) {
//   console.log("Tegsh");
// } else {
//   console.log("sondgoi");
// }

// let nToo = 37;

// if (nToo % 2 === 0 && nToo > 10) {
//   console.log("tegsh ba 10s ikh");
// } else if (nToo % 2 !== 0 && nToo > 10) {
//   console.log("Sondgoi ba 10s ikh");
// } else if (nToo % 2 === 0 && nToo < 10) {
//   console.log("tegsh ba 10s baga");
// } else if (nToo % 2 !== 0 && nToo < 10) {
//   console.log("Sondgoi ba 10s baga");
// }

let a = 85;

if (a >= 90 && a <= 100) {
  console.log("onts");
} else if (a >= 80 && a <= 89) {
  console.log("B");
} else if (a >= 70 && a <= 79) {
  console.log("C");
} else if (a >= 60 && a <= 69) {
  console.log("D");
} else if (a > 1 && a <= 59) {
  console.log("F");
}

//11/29
let number = -2;

if (number >= 1) {
  console.log("eyreg");
} else {
  console.log("sorog");
}

let n1 = 24;
let n2 = 45;
let n3 = 89;

if (n1 > n2 && n1 > n3) {
  console.log("n1 ikh");
} else if (n2 > n1 && n2 > n3) {
  console.log("n2 ikh");
} else if (n3 > n1 && n3 > n1) {
  console.log("n3 ikh");
}

let weight = 40;
let height = 1.8;

height = weight / height ** 2;

if (height <= 18.5) {
  console.log("жингийн дутагдалтай");
}

let day = 6;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sanday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName);

let person = "zaya";
let comeIn;

switch (person) {
  case "Naraa":
  case "Dondog":
  case "Baldan":
  case "Galt":
  case "Dulmaa":
    comeIn = "irsen";
    break;
  default:
    comeIn = "manai ajiltan bish";
}
console.log(comeIn);

let date = 6;
switch (date) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("week");
    break;
  case 6:
  case 7:
    console.log("weekend");
    break;
  default:
    console.log("false day");
}

let age = 21;
let message = age >= 18 ? "та насанд хүрсэн байна" : "та хүүхдээрээ байна";

console.log(message);

let age1 = 25;

let isZuvshuureltei =
  age >= 21 ? "танд зөвшөөрөл байна" : "танд зөвшөөрөл байхгүй байна";
console.log(isZuvshuureltei);

// is - хамгийн зөв
// body : margin: 0; гэж бичиж байх
// BEST PRACTICE

let year = 2013;
let leapYear;

//11/30

let balance =0

let value = window.prompt("end toon utga bichne uu?");
let currencyFrom = window.prompt(
  "end temdegt oruulna uu? \n1.USD, \n2.MNT, \n3.CNY, \n4.RUB"
);
switch (currencyFrom){
  case"1":
  currencyFrom = 3450;
  break;
  case"2":
  currencyFrom = 1;
  break;
  case"3":
  currencyFrom = 480;
  break;
  case"4":
  currencyFrom = 38;
  break;
  default:
    console.log("Buruu orolt"); 
}
let currencyTo = window.prompt(" end temdeg oruulna uu? \n1. USD\n2. MNT\n3. CNY\n4. RUB");
switch(currencyTo){
  case "1":
    currencyTo = 3450;
    break;
    case "2":
      currencyTo = 1;
      break;
      case "3":
        currencyTo = 480;
        break;
        case "4":
          currencyTo = 38;
          break;
          default:
            console.log("Buruu orolt");
}
window.alert((currencyFrom * value) / currencyTo)



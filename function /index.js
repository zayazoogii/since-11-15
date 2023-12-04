//12/04 
// let input = prompt ("End neree bichne uu");
// let input2 = prompt ("End ovog bichne uu");

 //  function allName (firstName, secondName){
// // console.log (input, secondName);
  // }
// allName(input, input2);



// 2 too garaas awna
let number = window.prompt ("Enter first number");
let number2 = window.prompt("Enter second number");

// Option garaas temdegtn * + - 
// Bugdin bodood hariugiin butsaah
 let temdeg =window.prompt ("Temdegt oruulna uu? \n1 urjinkh, \n2 huwaakh, \n3 nemekh, \n4 khasakh");

// 1. plush
// 2. minus function
// 3. urjdeg
// 4 huwaadag
  
 switch (temdeg){
    case "1":
    temdeg = (Number(number * number2));
    break;
    case "2":
    temdeg = (Number(number % number2));
    break;
    case "3":
    temdeg = (Number(number) + Number(number2));
    break;
    case "4":
    temdeg = (Number(number - number2));
    break;
    default:
        console.log ("buruu orolt");
 }

window.alert (temdeg);

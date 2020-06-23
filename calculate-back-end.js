/******************
 * YOUR CODE HERE *
 ******************/
function calculate(str1, str2, str3){
  const num1 = parseInt(str1);
  const num2 = parseInt(str2);
  if(str3 === '+'|| str3 === 'plus'|| str3 === 'added to'){return num1 + num2;}
  else if(str3 === '-'|| str3 === 'minus'|| str3 === 'subtracted from'){return num1 - num2;}
  else if(str3 === 'x'|| str3 === 'X'|| str3 === 'times'|| str3 === 'multiplied by'){return num1 * num2;}
  else if(str3 === '/'|| str3 === 'divided by'){return num1 / num2;}
  else if(str3 === '%'||str3 === 'modulus'|| str3 === 'mod'){return num1 % num2;}
  else {return "Sorry, that's not a mathematical operation!";}
}

 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;
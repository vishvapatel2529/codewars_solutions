//Multiplication table for number

function multiTable(number) {
  var s = "";
  for (let i = 1; i <= 10; i++) {
    const result = i * number;
    s = s + `${i} * ${number} = ${result}\n`;
  }
  return s.substring(0, s.length - 1);
}

// calculate BMI

function bmi(weight, height) {
  var a = weight / (height * height);

  if (a <= 18.5) {
    return "Underweight";
  } else if (a <= 25.0) {
    return "Normal";
  } else if (a <= 30.0) {
    return "Overweight";
  } else if (a > 30) {
    return "Obese";
  }
}

//string repeat

function repeatStr(n, s) {
  var a = s.repeat(n);

  return a;
}

//remove first and last character

function removeChar(str) {
  //You got this!
  var a = str.substring(1, str.length - 1);
  return a;
}

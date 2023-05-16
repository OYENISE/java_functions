
//Write a function that takes two numbers as arguments and returns the larger number. If the numbers are equal, return "Equal".

function addTwonum(num1, num2) {
    if (num1 === num2) {
        return 'equal'
    } else if (num1 > num2) {
        return num1 
    } else {
        return num2;
    }
}
console.log(addTwonum(10, 15));


//Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.


function listNum ([num1, num2, num3]) {
    return num1 + num2 + num3
}
console.log(listNum([3,4,5]))


// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.


function stringName (str) {
    
    if (str === '')
    return "empty string"

    else {
        return str.length
    }

}

console.log(stringName(''))

//Write a function that takes an array of strings as an argument and returns the longest string in the array. If the array is empty, return "Empty Array".


function list ([name1, name2]) {
    if (name1.length > name2.length) {
    return name1
} else if (name2.length > name1.length){
    return name2
} else {
    return 'empty arrey'
}

}

console.log(list (['','']))

//Write a function that takes a number as an argument and returns "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. If the number is not divisible by either 3 or 5, return the number.


function fizzB(num1) {
    if (num1 % 3 === 0) {
        return 'Fizz'
    } else if (num1 % 5 === 0) {
        return 'Buzz'
    } else if (num1 % 3 && 5 === 0){
        return 'FizzBuzz'
    } else {
        return num1
    }
       
}

console.log(fizzB(15))


function fizzBuzz(nums) {

    let result = "";
  
    for (let i = 1; i <= nums; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += 'fizzBuzz';
      }
      else if (i % 3 === 0) {
        result += 'fizz';
      }
      else if (i % 5 === 0) {
        result += 'buzz';
      }
      else {
        result += i;
      }
    }
    return result;
}

console.log(fizzBuzz(11))
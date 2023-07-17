// ---------------Only Odds
// step 1- assign array to a constant 
// step 2-make a for loop 
// step 3- make an if statement where if the remainder of a number divided by 2 is greater than 0, it will print that number. 

// const num = [2,4,8,11,20,15,22]
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const num = [70, 42, 55, 81, 21, 91, 34]
// const num = [2, 4, 6, 8, 10, 11, 12] 

// for (let index =0; index < num.length; index++)
// {
//     if (num[index] % 2 > 0){ console.log(num[index])}
// }
    
// ------- Vowels and Consonants
// establish a constant for the message 
// establish what is a vowel 
// create a loop that counts the number of vowels
// go through the string, counting the number of letters that match the established options for vowels. once completed counting, print the number of vowels. Then, substract that number from the total length of the string to get the consonant count. print that too. 

// do a for statement like the one for the last question, then do an if statement, stating that if the string letter is loosley equal to the voweloptions, increase count of vowels. do an else statment, where if it is not a vowel, increase consnonat by 1. 

// const message = "hello"
// const message = "ukelele"
// const message = "awesome"
// const message = "onomonopia"
// const message = "textbook"

// let vowels = 0
// // let consonant = 0

// const vowelOption = ["a", "e", "i", "o", "u"]

// for (let i =0; i < message.length; i++) {
//     for (let j = 0; j < vowelOption.length; j++) {
//         if (vowelOption[j] == message[i]){vowels++} 
        
//     } 
  
// } 
// console.log( " There are " + vowels + " vowels in the message" )
    
// console.log ("There are " + (message.length - vowels) + " consonants in the message")
// {curly brackets}= finish your thought 

// ---------Reverse Array 

// declare the input array 
// create a resultArray so that you can log the reverse of the original inputArray 
// create a forloop that loops through the array

// const inputArray = [1,2,3]
// const inputArray = [1, 3, 5, 7, 9, 11]
// const inputArray =[20, 50, 30, 60, 200]
// const inputArray = [1, -1, 2, -3, 5, -8, 13]

// let resultArray = []

// for (let i =0; i < inputArray.length; i++){
//     resultArray.unshift (inputArray[i])
// }


// console.log (resultArray)


// ----------Fizz Buzz

// create a for loop where the numbers cycle from 1 to 100
// create an if statement stating that if a number is cleanly divisible by 3 or 5, it will print "fizzbuzz"
// create an else if statement stating taht if a number is only divisible by 3, print "fizz"
// create an else if statements stating that if a number is only divisible by 5, print "buzz"
// create an else statement so that every other number not divisible by 3, 5, or both is printed as normal. 

// for (let i =1; i <= 100; i++) {

// if (((i % 3) == 0) && ((i % 5)== 0)) {console.log ("FizzBuzz")}    

// else if ((i % 3) == 0) {console.log ("Fizz") }

// else if ((i % 5) == 0 ) {console.log ("Buzz") }

// else (console.log(i))
// }
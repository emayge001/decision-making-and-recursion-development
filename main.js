
//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
const isLeap = (year) => {
    // this function checks if the year is a leap year or not using the given conditions
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeap(2036)); //true


//Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
//create your function
const ticketPricing = () => {
    //get input via prompt
    let age = parseInt(prompt("Enter your age: "));

    //initialize your conditions using if else statements
    if (age <= 12){
        console.log("Ticket price is $10");
    } else if (age >= 13 && age <= 17){
        console.log("Ticket price is $15");
    } else if(age >= 18){
        console.log("Ticket price is $20");
    } else {
        console.log("Invalid input");
    }

}

//call out your function
ticketPricing();



// Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.
const isPalindrome = str => {
    // Clean the input string by removing spaces, punctuation, and converting to lowercase
    const cleanedStr = str.replace(/[^\w]|_/g, '').toLowerCase();

    // Base case: if the length of the cleaned string is 0 or 1, it's a palindrome
    if (cleanedStr.length <= 1) {
        return true;
    }

    // Recursive case: check if first and last characters are equal, and recurse on the substring
    if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
        // Return the result of checking the substring excluding the first and last characters
        return isPalindrome(cleanedStr.slice(1, cleanedStr.length - 1));
    } else {
        // If first and last characters are not equal, it's not a palindrome
        return false;
    }
};

// Example usage:
const str1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str1)); // Output: true

const str2 = "racecar";
console.log(isPalindrome(str2)); // Output: true

const str3 = "hello";
console.log(isPalindrome(str3)); // Output: false




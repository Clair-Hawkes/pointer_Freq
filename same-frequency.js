"use strict";

//Given 2 POSITIVE integers
//Return true false
//Whether both integers have the same frequency of digits
//Quick fail if lengths dont match

//TIme complexity: O(n+m);


/**Function sameFrequency takes 2 positive integers (num1,num2)
 * Returns true: both integers contain the same frequency of digits
 * Or returns false.
 */
function sameFrequency(num1, num2) {

  //frequencyCounter(array) - Credit Taylor Hood
  const freq1 = frequencyCounter(num1.toString()); //O(n)
  const freq2 = frequencyCounter(num2.toString()); //O(m)

  for (let digit in freq1) {
    if (freq1[digit] !== freq2[digit]) {
      return false;
    }
  } //O(n)

  return true;

} //O(n+m)

//PsuedoCode
//Sorting is off the table
//Frequency counter is the move
//We have access to the pre-built frequency counter func from
//function frequencyCounter(array) - Credit Taylor Hood
//Turning the nums into string creating an iterable
//creating constants = output of frequencyCounter(num1), num2
//for in loop through num1
//Checking
//Check that the frequencies match
//Because we'ed have to have the key to access it
//Either
//Resolve false and return false
//Exit the loop and return true


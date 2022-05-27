"use strict";
// add whatever parameters you deem necessary & write docstring
//Take a +-+-SORTED-+-+ Array of numbers and a target avg
//Determine if paiur of numbers where the avg of 2 numbers matches the target
//There may be multiple matches of pairs === target avg

/**Function averagePair:
 * Take both an array of numbers(nums) and a target avg(target).
 * The function returns true if the avg of any pair of numbers
 * is equal to the target avg.
 */
function averagePair(nums, target) {

  /**createAvg takes 2 numbers(num1,num2) and returns their avg */
  const createAvg = ((num1, num2) => (num1 + num2) / 2);

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    const currAvg = createAvg(nums[leftPointer], nums[rightPointer]);

    if (currAvg === target) {
      return true;

    } else if (currAvg >= target) {
      rightPointer--;

    } else if (currAvg <= target) {
      leftPointer++;

    }
  }

  return false;

}

//Multiple pointers
//Set pointers at opposite ends
//While loop left pointer index < right pointer index
//Check
//If pointers equal target return true
//If avg of (values at pointers) > target avg, right--
//If avg of (values at pointers) < target avg, left ++
//Granted that the given sorted array is Ascending in value


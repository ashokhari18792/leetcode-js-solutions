// bruteforce approach

let twoNumberSumBruteForce = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) return [i, j];
    }
  }
};

let twoNumberSumTwoPassHashtable = function (nums, target) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in hashmap) return [i, hashmap[complement]];
  }
};

let twoNumberSumOnePassHashtable = function (nums, target) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in hashmap) return [i, hashmap[complement]];
    hashmap[nums[i]] = i;
  }
};

let nums = [2, 7, 11, 15];
let target = 9;

// console.log(twoNumberSumBruteForce(nums, target));
// console.log(twoNumberSumTwoPassHashtable(nums, target));
console.log(twoNumberSumOnePassHashtable(nums, target));

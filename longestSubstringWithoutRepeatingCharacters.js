let longestSubstrWithoutRepeatingCharsBruteforce = function (s) {
  let isAllCharsUnique = function (start, end) {
    let chars = new Array(128).fill(0);

    for (let i = start; i <= end; i++) {
      let charCode = s.charCodeAt(i);
      chars[charCode] += 1;

      if (chars[charCode] > 1) return false;
    }

    return true;
  };

  let n = s.length;
  let result = 0;
  let resultStr = '';

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isAllCharsUnique(i, j)) {
        result = Math.max(result, j - i + 1);
        resultStr = s.substring(i, j + 1);
      }
    }
  }

  return result;
};

let longestSubstrWithoutRepeatingCharsSkidingWindow = function (s) {
  // initialize an empty array of size 128 filled with zeros for hashing all the
  // characters.
  let chars = new Array(128).fill(0);

  // initialize indices for sliding window
  let left = 0;
  let right = 0;

  // initialize the initial length value \
  let res = 0;
  let n = s.length;

  while (right < n) {
    chars[s.charCodeAt(right)] += 1;

    while (chars[s.charCodeAt(right)] > 1) {
      chars[s.charCodeAt(left)] -= 1;
      left += 1;
    }

    res = Math.max(res, right - left + 1);
    right += 1;
  }

  return res;
};

let longestSubstrWithoutRepeatingCharsSkidingWindowOptimal = function (s) {
  let n = s.length;
  let mp = {};
  let res = 0;

  // set the left range of the window.
  let i = 0;

  // expand the range [i, j]
  for (let j = 0; j < n; j++) {
    if (s[j] in mp) i = Math.max(i, mp[s[j]]);
    res = Math.max(res, j - i + 1);
    mp[s[j]] = j + 1;
  }

  return res;
};

let longestSubstrWithoutRepeatingCharsSkidingWindowOptAscii128 = function (s) {
  let n = s.length;

  /* 
    use int[26] for letters a-z or A-Z
    use int[128] for ASCII
    use int[256] for Extended ASCII
  */
  let chars = new Array(128).fill(null);
  let left = 0;
  let right = 0;
  let res = 0;

  while (right < n) {
    let index = chars[s.charCodeAt(right)];
    if (index != null && index >= left && index < right) left = index + 1;
    res = Math.max(res, right - left + 1);
    // console.log(res);
    chars[s.charCodeAt(right)] = right;
    right += 1;
  }

  return res;
};

let s = 'pwwkew';
let s1 = 'abcabcbb';
// console.log(longestSubstrWithoutRepeatingCharsSkidingWindow(s));
// console.log(longestSubstrWithoutRepeatingCharsSkidingWindowOptimal(s1));
console.log(longestSubstrWithoutRepeatingCharsSkidingWindowOptAscii128(s1));

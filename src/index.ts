import { binarySearch } from "./algorithms/binary-search";
import { kSum } from "./algorithms/ksum";
import { quickSort } from "./algorithms/quick-sort";
import { getNumericArray } from "./utils/array";

// console.log(getNumericArray(100, 1, 1000, false));

//kSum
let nums1: number[] = getNumericArray(12, -10, 10);
let target1: number = 0;
kSumProblem(nums1, target1, 4);

//Binary Search
let nums2: number[] = getNumericArray(30, -40, 50, true, false);
binarySearch(nums2, nums2[16]);

//Quick sort
let nums3: number[] = getNumericArray(10, 1, 30, false, true);
console.log(`Quick Sort INPUT: `, nums3);
quickSort(nums3, 0, 9);
console.log(`Quick Sort RESULT: `, nums3);

function kSumProblem(nums: number[], target: number, k: number) {
    nums.sort((a: number, b: number) => a - b);
    console.log(`${k}Sum INPUT`, nums, target);
    console.log(`${k}Sum RESULT:`, kSum(nums, target, 0, k));
}
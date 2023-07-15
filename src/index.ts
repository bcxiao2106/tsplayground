import { binarySearch } from "./algorithms/binary-search";
import { kSum } from "./algorithms/ksum";
import { getNumericArray } from "./utils/array";

// console.log(getNumericArray(100, 1, 1000, false));

let nums1: number[] = getNumericArray(12, -10, 10);
let target1: number = 0;
// kSumProblem(nums1, target1, 4);
let nums2: number[] = getNumericArray(30, -40, 50, true, false);
binarySearch(nums2, nums2[8]);

function kSumProblem(nums: number[], target: number, k: number) {
    nums.sort((a: number, b: number) => a - b);
    console.log(`${k}Sum`, nums, target);
    console.log(`${k}Sum result:`, kSum(nums, target, 0, k));
}
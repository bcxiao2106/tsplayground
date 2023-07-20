import { binarySearch } from "./algorithms/binary-search";
import { heapSort } from "./algorithms/heap-sort";
import { kSum } from "./algorithms/ksum";
import { mergeSort } from "./algorithms/merge-sort";
import { quickSort } from "./algorithms/quick-sort";
import { getNumericArray } from "./utils/array";

//kSum
let nums1: number[] = getNumericArray(12, -10, 10);
let target1: number = 0;
kSumProblem(nums1, target1, 4);

//Binary Search
let nums2: number[] = getNumericArray(30, -40, 50, true, false);
binarySearch(nums2, nums2[16]);

//Quick sort
let nums3: number[] = getNumericArray();
console.log(`Quick Sort INPUT: `, nums3);
quickSort(nums3);
console.log(`Quick Sort RESULT: `, nums3);

//Merge sort
let nums4: number[] = getNumericArray();
console.log(`Merge Sort INPUT: `, nums4);
mergeSort(nums4);
console.log(`Merge Sort RESULT: `, nums4);

//Heap Sort
let nums5: number[] = getNumericArray();
console.log(`Heap Sort INPUT: `, nums5);
heapSort(nums5);
console.log(`Heap Sort RESULT: `, nums5);

function kSumProblem(nums: number[], target: number, k: number) {
    nums.sort((a: number, b: number) => a - b);
    console.log(`${k}Sum INPUT`, nums, target);
    console.log(`${k}Sum RESULT:`, kSum(nums, target, 0, k));
}
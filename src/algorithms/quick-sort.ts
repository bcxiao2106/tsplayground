import { IAlgorithm, TimeComplexity } from "../typings/typings";

/**
 * @param nums An unsorted numeric array
 * @param low 'from' index of a partition
 * @param high 'to' index of a partition
 * @description Time complexity: O(nlog(n))
 */
export function quickSort(nums: number[], low: number, high: number) {
    if(low < high) {
        let patitionIndex: number = partition(nums, low, high);
        quickSort(nums, low, patitionIndex - 1);
        quickSort(nums, patitionIndex + 1, high);
    }
}

function partition(nums: number[], low: number, high: number): number {
    let pivot: number = nums[high]; //Choose a pivot
    let i: number = low - 1;
    for(let j = low; j <= high; j++) {
        if(nums[j] < pivot) {
            i++;
            swap(nums, i, j);
        }
    }
    swap(nums, i + 1, high);
    return i + 1;
}

function partitionWithRandomPivot(nums: number[], low: number, high: number): number {
    let randomIndex: number = high - Math.floor(Math.random() * (high - low)); //Choose a random pivot
    let pivot: number = nums[randomIndex]; //Choose a random pivot
    swap(nums, high, randomIndex); //Choose a random pivot
    let i: number = low - 1;
    for(let j = low; j <= high; j++) {
        if(nums[j] < pivot) {
            i++;
            swap(nums, i, j);
        }
    }
    swap(nums, i + 1, high);
    return i + 1;
}

function swap(nums: number[], i: number, j: number) {
    if(i == j) return;
    let temp: number = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

export const QuickSort: IAlgorithm = {
    complexity: TimeComplexity.nlogn
}
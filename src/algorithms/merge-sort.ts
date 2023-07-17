import { IAlgorithm, TimeComplexity } from "../typings/typings";

export function mergeSort(nums: number[]) {
    let temp: number[] = new Array(nums.length); //Assitant array, same length as original array
    sort(nums, 0, nums.length - 1, temp);
}

function sort(nums: number[], low: number, high: number, temp: number[]) {
    if(high <= low) return;
    let mid: number = Math.floor((high + low) / 2);
    sort(nums, low, mid, temp);
    sort(nums, mid + 1, high, temp);
    merge(nums, low, mid, high, temp);
}

function merge(nums: number[], low: number, mid: number, high: number, temp: number[]) {
    let i: number = low; //index in temp array
    let l: number = low; //index in left sub
    let r: number = mid + 1; //index in right sub

    while(l <= mid && r <= high) {
        if(nums[l] <= nums[r]) {
            temp[i++] = nums[l++];
        } else {
            temp[i++] = nums[r++];
        }
    }

    while(l <= mid) { //copy rest element in left sub
        temp[i++] = nums[l++];
    }

    while(r <= high) { //copy rest element in left sub
        temp[i++] = nums[r++];
    }

    i = low;
    while(low <= high) { //Copy from temp to nums
        nums[low++] = temp[i++];
    }
}

export const MergeSort: IAlgorithm = {
    complexity: TimeComplexity.nlogn
}
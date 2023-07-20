import { swap } from "../utils/functions";

export function heapSort(nums: number[]) {
    buildMaxHeap(nums);
    sort(nums);
}

function sort(nums: number[]) {
    let heapSize: number = nums.length;
    for(let i = nums.length - 1; i > 0; i--) {
        swap(nums, i, 0);
        heapify(nums, --heapSize, 0);
    }
}

function buildMaxHeap(nums: number[]) {
    let heapSize: number = nums.length;
    for(let i = parent(heapSize - 1); i >= 0; i--) {
        heapify(nums, heapSize, i);
    }
}

function heapify(nums: number[], heapSize: number, i: number) {
    let l: number = left(i);
    let r: number = right(i);
    let largest: number = i;
    if(l < heapSize && nums[l] > nums[i]) {
        largest = l;
    }
    if(r < heapSize && nums[r] > nums[largest]) {
        largest = r;
    }
    if(largest != i) {
        swap(nums, i, largest);
        heapify(nums, heapSize, largest);
    }
}

function parent(n: number): number {
    return Math.floor((n - 1) / 2);
}
function left(n: number): number {
    return 2 * n + 1;
}
function right(n: number): number {
    return 2 * n + 2;
}
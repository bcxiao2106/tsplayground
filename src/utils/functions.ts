export function swap(nums: number[], i: number, j: number) {
    if(i == j) return;
    let temp: number = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
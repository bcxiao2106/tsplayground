export function binarySearch(nums: number[], target: number): number {
    console.log('binarySearch', nums, target);
    let targetIndex: number = -1;
    let start: number = 0, end = nums.length - 1;
    while(start + 1 < end) {
        console.log(start, end);
        let p: number = start + Math.floor((end - start) / 2);
        if(nums[p] > target) {
            end = p;
        } else if(nums[p] < target) {
            start = p + 1;
        } else {
            targetIndex = p;
            break;
        }
    }
    console.log('binarySearch RESULT', targetIndex);
    return targetIndex;
}
export function kSum(nums: number[], target: number, start: number, k: number, ): number[][] {
    let res: number[][] = [];
    if(start == nums.length) return res;
    let avg: number = target / k;
    if(avg < nums[start] || avg > nums[nums.length - 1]) return res;
    if(k == 2) return twoSum(nums, target, start);
    for(let i = start; i < nums.length; i++) {
        if(i == start || nums[i] != nums[i - 1]) {
            let subSet: number[][] = kSum(nums, target - nums[i], i + 1, k - 1);
            for(let j = 0; j < subSet.length; j++) {
                res.push([nums[i], ...subSet[j]]);
            }
        }
    }
    return res;
}

export function twoSum(nums: number[], target: number, start: number): number[][] {
    let res: number[][] = [];
    let left: number = start, right = nums.length - 1;
    while(left <right) {
        let sum = nums[left] + nums[right];
        if(sum < target || (left < start && nums[left] == nums[left + 1])) {
            left++;
        } else if(sum > target || (right < nums.length - 1 && nums[right] == nums[right - 1])) {
            right--;
        } else {
            res.push([nums[left++], nums[right--]]);
        }
    }
    return res;
}
import { mergeSort } from '../sort-algors/mergeSort.js';

function threeSum(nums) {
    nums = mergeSort(nums, 0, nums.length - 1);
    // console.log("After mergeSort: ", nums);
    let triplets = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum == 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] == nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right - 1]) {
                    right--;
                }
                left++;
                right++;
            } else if (sum < 0) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }
    console.log("Triplets: ", triplets);
}

function main() {
    let nums = [-1, 0, 1, 2, -1, 4];
    // let nums = [1, 0, -1];
    // console.log("Before mergeSort: ", nums);
    threeSum(nums);
}

main();
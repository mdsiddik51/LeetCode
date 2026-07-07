const nums = [2,7,11,15];
const target = 9 ;

var twoSum = function(nums, target) {
    let mp = new Map();
    for(let i = 0; i < nums.length; i++){
        let remain = target - nums[i];
        if(mp.has(remain)){
            return [mp.get(remain), i];
        }
        else{
            mp.set(nums[i], i)
        }
    }
};


const result = twoSum(nums , target);
console.log(result);
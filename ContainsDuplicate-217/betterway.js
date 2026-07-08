const nums = [1, 2, 3, 4];

var containsDuplicate = function (nums) {
    const numbers = new Set(nums);
    if(numbers.size !== nums.length){
        return true;
    }
    return false
};

const result = containsDuplicate(nums);
console.log(result);
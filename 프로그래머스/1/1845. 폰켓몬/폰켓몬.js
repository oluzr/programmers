function solution(nums) {
    const length = [...new Set(nums)].length 
    return length > parseInt(nums.length / 2) ? parseInt(nums.length / 2) : length
}
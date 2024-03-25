function solution(numbers) {
    const numArr = new Array(10).fill(0).map((e,i)=>e+i)
    return numArr.filter((e)=>!numbers.includes(e)).reduce((acc,cur)=>acc+=cur,0)
}
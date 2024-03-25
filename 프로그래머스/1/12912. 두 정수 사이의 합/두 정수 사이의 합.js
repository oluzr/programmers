function solution(a, b) {
    const arr = new Array(Math.max(b,a)-Math.min(b,a)+1).fill(Math.min(a,b)).map((e,i)=>e+i).reduce((acc,cur)=>acc+=cur,0)
    return arr
    
}
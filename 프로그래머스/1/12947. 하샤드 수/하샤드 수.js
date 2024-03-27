function solution(x) {
    const n = (x+'').split('').reduce((acc,cur)=>acc+=Number(cur),0)
    return x%n===0
}
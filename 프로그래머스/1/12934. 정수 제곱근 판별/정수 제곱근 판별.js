function solution(n) {
    const x = Math.sqrt(n)
    return x && x%1===0 && x > 0 ? Math.pow(x+1, 2) : -1
}
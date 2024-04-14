function solution(a, b) {
    const a1 = a+''
    const b1 = b+''
    return a1+b1 > b1+a1? Number(a1+b1) : Number(b1+a1)
}
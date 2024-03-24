function solution(absolutes, signs) {
    return absolutes.map((e,i)=>signs[i]?e:e*-1).reduce((acc,cur)=>acc+=cur,0)
}
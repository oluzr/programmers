function solution(n) {
    let arr = []
    for(let i=1; i<=n; i++){
        n%i===0 && (arr = [...arr,i])
    }
    return arr.reduce((acc,cur)=>acc+=cur,0)
}
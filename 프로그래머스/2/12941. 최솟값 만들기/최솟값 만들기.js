function solution(A,B){
    const A1 = A.sort((a,b)=>a-b)
    const B1 = B.sort((a,b)=>b-a)
    return A1.reduce((acc,cur,idx)=>(
        acc+=cur*B1[idx]
    ),0)
}
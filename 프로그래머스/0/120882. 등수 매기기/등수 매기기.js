function solution(score) {
    let acc =  score.map((e,i)=> (e[0]+e[1])/2)
    let numberArr = [...acc].sort((a,b)=>b-a)
    return acc.map((e,i)=>numberArr.indexOf(e)+1)
    
}
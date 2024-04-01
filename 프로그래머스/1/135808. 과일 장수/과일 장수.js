function solution(k, m, score) {
    let answer=0;
    score.sort((a,b)=>b-a).forEach((e,i)=>{
        if(i%m === m-1) answer+=e*m
    })
    return answer
}
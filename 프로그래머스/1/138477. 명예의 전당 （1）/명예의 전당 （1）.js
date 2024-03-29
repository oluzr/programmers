function solution(k, score) {
    let hall = [] 
    let answer = [] 
     score.forEach((e,idx)=>{
        hall.push(e)
        hall = hall.sort((a,b)=>b-a).filter((_,i)=>i<k)
        answer.push(hall.at(-1))
    })
    return answer
}
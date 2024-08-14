function solution(s) {
    const answer = [...s].reduce((acc,cur,idx)=>{                     
            if(s.indexOf(cur) === idx && s.lastIndexOf(cur) === idx){
                return [...acc, cur]
            }
        return acc
        }
    ,[])
    return answer.sort().join('')
}
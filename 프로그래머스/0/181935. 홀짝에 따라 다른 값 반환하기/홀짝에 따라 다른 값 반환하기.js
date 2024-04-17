function solution(n) {
    let type = n%2===0? 'even' : 'odd'
    let answer = 0;
    for(let i = 1; i <= n ; i++){
        if(type==='odd'){
            if(i%2===1) answer+=i
        }else{
            if(i%2===0) answer+=(i**2)
        }
    }
    return answer
}
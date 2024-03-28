function solution(n) {
    let answer = 1;
    for(let i = 1; i <= parseInt(n/2); i++){
        let total = i;
        let x = i
        while(true){
            total+=(x+1)
            x++
            if(total>=n){
                if(total === n) {
                    answer++
                }
                break;
            }
        }
    }
    return answer
}
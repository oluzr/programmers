function solution(n) {
    let answer = 0;
    for (let i = Math.min(6,n); i <= 6*n ; i+=Math.min(6,n)){
        if(i%n===0 && i%6===0){
            return i/6
        }
    }
}
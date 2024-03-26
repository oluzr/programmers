function solution(num) {
    let x = num
    let count = 0;
    while(x!==1){
        if(count > 500) return -1
        count++
        x%2 === 0 ? x = x / 2 : x = x*3+1
    }
    return count
}
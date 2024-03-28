function solution(s) {
    let n = s;
    let answer = {length:0, count:0};
    while(Number(n)!==1){
        let x = [...n].filter((e)=>Number(e)!==0).join('');
        answer.length+=n.length-x.length
        n = (x.length).toString(2)
        answer.count++
    }
    return [answer.count, answer.length]
}
function solution(arr) {
    const maxNum = arr.sort((a,b)=>b-a)[0]
    let i = 1; 
    while(true){
        if(arr.every((e)=> (maxNum*i) % e === 0)) break;
        i++
    }
    return maxNum*i
}
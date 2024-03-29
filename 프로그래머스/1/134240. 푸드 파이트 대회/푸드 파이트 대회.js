function solution(food) {
    let str = ''
    food.forEach((e,i)=>{
        if(i!==0){
            str+=(i+'').repeat(parseInt(e/2))
        }
    })
    return str+'0'+[...str].reverse().join('')
}
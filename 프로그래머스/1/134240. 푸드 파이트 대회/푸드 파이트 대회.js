function solution(food) {
    let answer = [];
    food.forEach((e,i)=>{
        if(i===0) return;
        if(e%2===0){
            answer=[...answer,...new Array(e/2).fill(i)]
        }else{
            answer=[...answer,...new Array((e-1)/2).fill(i)]
        }
    })
    return [...answer,0,...answer.reverse()].join('')
}
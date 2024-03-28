function solution(numbers) {
    let answer = []
    numbers.forEach((e,i)=>{
        if(i !== numbers.length-1){
            for(let j = i+1; j < numbers.length ; j++){
                answer.push(e+numbers[j])
            }
        }
    })
    return [...new Set(answer)].sort((a,b)=>a-b)
}
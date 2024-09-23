function solution(numbers) {
    let filteredArray = {
        plus: numbers.filter((n)=>n>=0).sort((a,b)=>b-a),
        minus: numbers.filter((n)=>n<0).sort((a,b)=>a-b)
    }
    if(numbers.length===2){
        return numbers.reduce((acc,cur)=> acc*=cur,1)
    }
    return filteredArray.plus.length<2
    ?
    filteredArray.minus[0]*filteredArray[1]
    :
    (
    filteredArray.minus.length<2?
    filteredArray.plus[0]*filteredArray.plus[1]
    :
    Math.max((filteredArray.plus[0]*filteredArray.plus[1]),(filteredArray.minus[0]*filteredArray.minus[1])||0)
    )

}
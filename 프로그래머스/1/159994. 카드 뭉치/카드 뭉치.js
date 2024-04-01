function solution(cards1, cards2, goal) {
    const result = goal.every((item,index)=>{
        if(cards1.indexOf(item)===0){
            cards1.shift()
        }else if(cards2.indexOf(item)===0){
            cards2.shift()
        }else{
            return false
        }
        return true
        
    })
    return result ? "Yes" : "No"
}
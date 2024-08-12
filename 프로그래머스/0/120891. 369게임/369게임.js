function solution(order) {
    return [...String(order)].map((e)=>Number(e)).filter((e)=> {
        if(e===3|| e===6|| e===9) return e
        return false
    }).length
}
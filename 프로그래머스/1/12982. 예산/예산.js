function solution(d, budget) {
    const arr = d.sort((a,b)=>a-b)
    let count = 0;
    let total = arr[0];
    for(let i = 1; i <= d.length; i++){
        if(total > budget) break;
        console.log(total, budget)
        total += arr[i]
        count ++
    }
    return count
}
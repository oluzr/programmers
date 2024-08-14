function solution(before, after) {
    const func = (str)=>{
        return str.split('').reduce((acc,cur)=>{
        return {
            ...acc,
            [cur] : acc[cur]+1 || 1
        } 
    },{})
    }
    let a = func(after)
    let b = func(before)
    
    return Object.keys(a).sort().every((e)=> a[e]===b[e]) ? 1: 0
}
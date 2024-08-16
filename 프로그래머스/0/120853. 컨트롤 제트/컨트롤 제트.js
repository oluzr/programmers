function solution(s) {
    let arr = s.split(' ')
    arr = arr.map((e,i)=> {
        if(e==='Z' || arr[i+1]==='Z'){
            return 0
        }
        return Number(e)
    })
    return arr.reduce((acc,cur)=>acc+=cur, 0)
}
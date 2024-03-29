function solution(sizes) {
    let answer= {width:0, height:0};
    answer.width = Math.max(...sizes.map((e,i)=>(
        Math.max(...e)
    )))
    answer.height = Math.max(...sizes.map((e,i)=>(
        Math.min(...e)
    )))
    return answer.width*answer.height
}
function solution(emergency) {
    let sortedArr = [...emergency].sort((a,b)=>b-a)
    return emergency.map((e,i)=> sortedArr.indexOf(e)+1)
}
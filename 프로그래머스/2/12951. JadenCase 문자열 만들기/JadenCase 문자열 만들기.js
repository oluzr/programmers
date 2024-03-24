function solution(s) {
    const arr = s.split(' ')
    return arr.map((e1)=>(
        e1.split('').map((e1,idx)=>(
            idx===0? e1.toUpperCase(): e1.toLowerCase()
        )).join('')
    )).join(' ')
}
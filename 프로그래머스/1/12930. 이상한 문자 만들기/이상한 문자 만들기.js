function solution(s) {
    return s.split(' ').map((e1)=>(
        [...e1].map((e2,i)=>i%2===0? e2.toUpperCase(): e2.toLowerCase()).join('')
    )).join(' ')
}
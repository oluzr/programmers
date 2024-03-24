function solution(s){
    return s.split('').filter((e)=>e.toLowerCase()==='p').length === 
    s.split('').filter((e)=>e.toLowerCase()==='y').length
}
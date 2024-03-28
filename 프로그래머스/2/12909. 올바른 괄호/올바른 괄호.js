function solution(s){
    let count = 0;
    if(s.charAt(0)===')' || s.charAt(-1)==='(') return false;
    for(let i = 0 ; i < s.length ; i++){
        s.charAt(i)==='(' ? count+=1 : count-=1;
        if(count < 0){
            return false
            break;
        }
    }

   return count === 0
}
function solution(s) {
    return s.split('').map((e,i)=>{
        if(i===0){
            return -1
        }
        for(let j = i-1; j >= 0 ; j--){
            if(s.split('')[j] === e){
                return i-j 
            }
        }
        return -1
    })
}
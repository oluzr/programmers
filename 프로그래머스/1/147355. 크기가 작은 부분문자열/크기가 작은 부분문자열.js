function solution(t, p) {
    let count= 0
    t.split('').forEach((e,i)=>{
        let num = t.split('').splice(i,p.length).join('')
        if(num.length === p.length && num <=p){
            count++
        }   
    })
    return count
    
}
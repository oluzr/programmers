function solution(n) {
    const nn=n.toString(2).split('').filter((e)=> e==='1')
    for(i=n; true; i++){
        const ii=i.toString(2).split('').filter((e)=> e==='1')
        if(nn.length===ii.length && i>n) {
            return i
        }
    } 
}
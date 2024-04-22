function solution(code) {
    let ret = []
    let mode = false
    Array.from(code).some((e,i)=>{
        if(e==='1') {
            mode = !mode
            return false
        }
        if(mode===false){ // 0일때
            i%2===0 && ret.push(e)
        }else{ //1일때
            i%2!==0 && ret.push(e)
        }
        
    })
    return ret.join('')==='' ? 'EMPTY' : ret.join('')
}
function solution(s) {
    let string = s
    const eng = ['zero','one','two','three','four','five','six','seven','eight','nine']
    eng.forEach((e,i)=>{
        if(s.includes(e)){
            string = string.replaceAll(e,eng.indexOf(e))
        } 
    })
    return Number(string)
}
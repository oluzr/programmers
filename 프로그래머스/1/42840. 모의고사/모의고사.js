function solution(answers) {
    const man1 = [1,2,3,4,5]
    const man2 = [2,1,2,3,2,4,2,5]
    const man3 = [3,3,1,1,2,2,4,4,5,5]
    let max = 0; 
    let checkFun = (man) => {
        const length = answers.filter((e,i)=>(
            e === man[i % man.length]
        )).length
        max = Math.max(max,length)
        return length
    }
    const mans = {
        1 : checkFun(man1),
        2 : checkFun(man2),
        3 : checkFun(man3)
    }
    return Object.keys(mans).filter((e)=>mans[e] === max).map((e)=>parseInt(e))
    
}
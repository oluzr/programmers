function solution(id_pw, db) {
    let arr1,arr2; 
    arr1 = db.filter((e)=> id_pw[0]===e[0])
    if(arr1.length===0) return 'fail'
    arr2 = arr1.filter((e)=> id_pw[1] === e[1])
    return arr2.length>0 ? 'login' : 'wrong pw'
}
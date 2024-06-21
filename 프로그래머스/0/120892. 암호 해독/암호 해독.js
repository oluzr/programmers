function solution(cipher, code) {
    return cipher.split('').map((e,i)=>(i+1)%code===0?e:'').join('')
}
function solution(str1, str2) {
    return [...str1].map((e,i)=>e+str2[i]).join('')
}
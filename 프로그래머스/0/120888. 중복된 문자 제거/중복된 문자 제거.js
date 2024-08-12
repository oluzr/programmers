function solution(my_string) {
    return [...my_string].filter((e,i)=> [...my_string].indexOf(e)===i).join('')
}
function solution(my_string, index_list) {
    return index_list.map((e,i)=>my_string.charAt(e)).join('')
}
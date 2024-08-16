function solution(my_string, is_suffix) {
    return [...my_string].reverse().join('').startsWith([...is_suffix].reverse().join('')) ? 1: 0
}
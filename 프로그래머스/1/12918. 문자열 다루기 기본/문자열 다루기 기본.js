function solution(s) {
    const regexr = /^[0-9]*$/
    return regexr.test(s) && (s.length===4 || s.length===6)
}
function solution(s) {
    return s.length % 2 !== 0? s.substr((s.length-1)/2 ,1) : s.substr(parseInt((s.length-1)/2) ,2)
}


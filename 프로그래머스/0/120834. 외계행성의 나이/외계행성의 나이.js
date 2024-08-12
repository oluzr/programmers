function solution(age) {
    let ageAlphabet=['a','b','c','d','e','f','g','h','i','j']
    return [...String(age)].map((e)=>+e).map((e)=>ageAlphabet[e]).join('')
}
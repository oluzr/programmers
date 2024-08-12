function solution(num, k) {
   return [...String(num)].map((e)=>+e).indexOf(k)+1 || -1
}
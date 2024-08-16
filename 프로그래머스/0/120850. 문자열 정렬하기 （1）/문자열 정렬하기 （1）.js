function solution(my_string) {
  const numberArr = new Array(10).fill(0).map((e,i)=>e+i)
  return [...my_string].filter((e)=> numberArr.includes(+e)).map((e)=>Number(e)).sort((a,b)=>a-b)
}
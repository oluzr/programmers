function solution(array, n) {
    let arr = [...array,n].sort((a,b)=> a-b)
    const idxOfN = arr.indexOf(n)
    if(idxOfN===0) return arr[1]
    if(idxOfN===arr.length-1) return arr[idxOfN-1]
    return n - arr[idxOfN-1] > arr[idxOfN+1]-n ? arr[idxOfN+1] : arr[idxOfN-1]
}
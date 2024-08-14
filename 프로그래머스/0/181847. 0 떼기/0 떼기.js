function solution(n_str) {
    let arr = n_str.split('')
    let idx;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== '0'){
            idx=i
            break;
        } idx = -1
    }
    return idx < 0 ? n_str : arr.slice(idx).join('')
}
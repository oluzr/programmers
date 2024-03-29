function solution(name, yearning, photo) {
    return photo.map((picture)=>{
        return picture.reduce((acc,cur,idx)=>{
            let i = name.indexOf(cur)
            return acc += yearning[i] || 0
        },0)
    })
}
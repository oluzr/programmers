function solution(n, control) {
    let x = n
    control.split('').forEach((e)=>{
        switch(e){
            case 'w':
                x+=1
                break;
            case 's':
                x-=1
                break;
            case 'd':
                x+=10
                break;
            case 'a':
                x-=10
                break;                
        }
    })
    return x
}
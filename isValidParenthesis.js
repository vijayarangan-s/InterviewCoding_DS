var isValidParenthes = (str) => {
    let a = [...str];
    if(a.length % 2 != 0) return false;
    for(let i=0; i<a.length; i++){
        console.log(i)
        if((a[i]==='{' && a[a.length-i-1] === '}') || (( a[i] === '['&& a[a.length-i-1] === ']'))){
           console.log(i)    
            return true
         } else{
             return false
         }  
    }
}

isValidParenthes('[{{[]}}]')
// isValidParenthes('{]}')



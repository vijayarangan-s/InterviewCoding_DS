var bubbleSort = (a) => {
   for(let i =0 ; i<a.length; i++){
       for(let j=0; j<a.length; j++){
           if(a[j] > a[j+1]){
               a[j+1]=[a[j], a[j] = a[j+1]][0]
           }
       }
   }
   return a
}

bubbleSort([100,9,78,6,56,2])

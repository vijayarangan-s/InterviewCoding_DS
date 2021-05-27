var quickSortArr = (a) => {
    let [p, ...rest] = a;

    let low = a.filter(n => n < p).sort((a,b) => a-b)
    let high = a.filter(n => n > p).sort((a,b) => a-b)
    console.log({low, high , p})

    return [...low,p,...high]
}

quickSortArr([2,1,4,0,-1,6,5,-4])

var rotateMatrix = (matrix) => {
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
}

var transposeArr = (matrix) => {
    if(matrix.length === 0) return []

    let len = matrix[0].length, result = []

    for(let i=0; i<len; i++){
        console.log(matrix[i])
        let row = matrix.map(e => e[i]).reverse();
        result.push(row)
    }
    return result;
}

var transposeArr = (matrix) => { // 2nd method
    if(matrix.length === 0) return []

    let len = matrix[0].length,newArr = []

    for(let i=0; i<len; i++){
        let result = []
        for(let j=0; j<len; j++){

            let row = matrix[j][i];
            result.push(row)
        }
        newArr.push(result.reverse())
    }
    return newArr;
}

transposeArr([
  [1,2,3],
  [4,5,6], 
  [7,8,9]
])

rotateMatrix([
  [1,2,3],
  [4,5,6], 
  [7,8,9]
])

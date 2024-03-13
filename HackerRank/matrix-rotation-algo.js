/*
Matrix Layer Rotation problem
https://www.hackerrank.com/challenges/matrix-rotation-algo/
*/

function matrixRotation(matrix, r) {
    const N = (matrix.length > matrix[0].length ? matrix[0].length : matrix.length)/2;
    for( let i=0 ; i<N ; i++ ){
        rotateRing(matrix,i,i,matrix.length-1-i,matrix[0].length-1-i,r);
    }
    printMatrix(matrix);
}

const printMatrix = matrix => {
    for( let i=0 ; i<matrix.length ; i++ ){
        let line = "";
        for( let j=0 ; j<matrix[i].length ; j++ )
            line += matrix[i][j] + " ";
        console.log(line);
    }
}

const rotateRing = (matrix,north,west,south,east,r) => {
    r = r%( (east-west+south-north)*2 );
    for( let k=0 ; k<r ; k++ ){
        let aux = matrix[north][west];
        matrix[north][west] = matrix[north][west+1];
        for( let i=north+1 ; i<=south ; i++ ){
            let aux2 = matrix[i][west];
            matrix[i][west] = aux;
            aux = aux2;
        }
        for( let i=west+1 ; i<=east ; i++ ){
            let aux2 = matrix[south][i];
            matrix[south][i] = aux;
            aux = aux2;
        }
        for( let i=south-1 ; i>=north ; i-- ){
            let aux2 = matrix[i][east];
            matrix[i][east] = aux;
            aux = aux2;
        }
        for( let i=east-1 ; i>=west+1 ; i-- ){
            let aux2 = matrix[north][i];
            matrix[north][i] = aux;
            aux = aux2;
        }
    }
}


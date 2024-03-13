/*
Diagonal difference problem
https://www.hackerrank.com/challenges/diagonal-difference
*/
function diagonalDifference(arr) {
    let left = 0;
    let right = 0;
    for( let i=0 ; i<arr.length ; i++ ){
        left += arr[i][i];
        right += arr[i][arr.length-1-i];
    }
    return left-right<0?right-left:left-right;
}

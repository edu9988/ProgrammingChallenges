/*
Mini-max Sum problem
https://www.hackerrank.com/challenges/mini-max-sum/
*/
function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    arr.forEach(a => {
        sum += a;
        if(a<min)
            min = a;
        if(a>max)
            max = a;
    })
    console.log(sum-max,sum-min);
}

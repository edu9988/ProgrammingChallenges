/*
Compare the Triplets problem
https://www.hackerrank.com/challenges/compare-the-triplets/
*/
function compareTriplets(a, b) {
    return ([
        a.filter((al,i)=>al>b[i]).length,
        b.filter((bo,i)=>bo>a[i]).length
    ]);
}

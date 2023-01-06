module.exports = function reverse (n) {
    n = Math.abs(n);
    a = n.toString();
    c = a.length;
    let i;
    let result='';
    for (i=c-1; i>=0; i--)  {
        result += a[i];
    }
    return result;
}

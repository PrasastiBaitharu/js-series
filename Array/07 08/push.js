let n = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let p = 0;
 if(p <= n.length && p>0) {
  for (let i = n.length; i > p - 1; i--) {
    n[i] = n[i - 1];
  }
  n[p - 1] = 55;
  console.log(n);
} else {
  console.log("Wrong position");
}

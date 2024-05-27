n=123;
a=n%10;
x=parseInt(n/10);
b=x%10;
c=parseInt(x/10);
s=a*100+b*10+c;
console.log("The three digit number is:",n);
console.log("The reverse of three digit :",s);
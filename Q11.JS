var a = 20; 
var b = 2;
var gcd;
while (a!=b)
{
if (a>b)
{
a = a -b;
}
else
{
b = b - a;
}
}
gcd = a;
console.log(gcd);
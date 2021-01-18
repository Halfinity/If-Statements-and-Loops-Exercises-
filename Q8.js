function happy_number(num)
{
var a, b ;
var c = [] ;

while(num != 1 && c[num] !== true)
{
c[num] = true ;
a = 0 ;
while (num > 0) {
b = num % 10 ;
a += b * b ;
num = (num - b) / 10 ;
}
num = a ;
}
return (num == 1) ;
}

var number = 5;
var num = 1;
var The5 = '';
while(number-- > 0)
{
while(!happy_number(num))
num++ ;
The5 = The5+(num + ", ") ;

num++ ;
}
alert('First 5 happy numbers are : '+The5);
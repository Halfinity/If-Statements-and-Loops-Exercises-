for ( var i = 1; i <= 100; i++ )
{
if ( i%3 === 0 && i%5 === 0 )
{
alert( i + " FizzBuzz" );
}
else if ( i%3 === 0 )
{
alert(i+ " Fizz" );
}
else if ( i%5 === 0 )
{
alert(i+ " Buzz" );
}
else
{
alert(i);
}
}
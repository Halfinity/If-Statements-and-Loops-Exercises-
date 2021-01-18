function three_digit_armstrong_number()
{
for (var i = 1; i < 10; ++i)
{
for (var a = 0; a < 10; ++a)
{
for (var b = 0; b < 10; ++b)
{
var pow = (Math.pow(i,3) + Math.pow(a,3) + Math.pow(b,3));
var plus = (i + 100 + a + 10 + b);
if (pow == plus)
{
alert(pow);
}
}
}
}
}
three_digit_armstrong_number();

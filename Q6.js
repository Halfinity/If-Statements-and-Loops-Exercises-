var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var avg = 0;

for (var i=0; i < students.length; i++) {
avg += students[i][1];
var avg = (avg/students.length);
}

alert("Average grade: " + (avg)/students.length);

if (avg < 60){
alert("Grade : F");
}
else if (avg < 70) {
alert("Grade : D");
}
else if (avg < 80)
{
alert("Grade : C");
} else if (avg < 90) {
alert("Grade : B");
} else if (avg < 100) {
alert("Grade : A");
}
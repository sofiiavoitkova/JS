//Task 1
alert( null || 2 || undefined ); //2
//Task 2
alert( alert(1) || 2 || alert(3) ); //1, then 2
//Task 3
alert( 1 && null && 2 ); //null
//Task 4
alert( alert(1) && alert(2) ); //1, then undefined
//Task 5
alert( null || 2 && 3 || 4 ); //3
//Task 6
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value); //30
//Task 7
if (age >= 14 && age <= 90){}
//Task 8
if (age < 14 || age > 90){}
//Task 9
if (-1 || 0) alert( 'first' ); //Yes
if (-1 && 0) alert( 'second' ); //No
if (null || -1 && 1) alert( 'third' ); //Yes
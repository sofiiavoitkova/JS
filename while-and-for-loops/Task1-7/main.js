//Task 1
let i = 3;

while (i) {
    alert(i--);
} // i = 1

//Task 2.1
let i = 0;
while (++i < 5) alert(i); //1, 2, 3, 4
//Task 2.2
let i = 0;
while (i++ < 5) alert(i); //1, 2, 3, 4, 5

//Task 3.1
for (let i = 0; i < 5; i++) alert(i); //0, 1, 2, 3, 4
//Task 3.2
for (let i = 0; i < 5; ++i) alert(i); //0, 1, 2, 3, 4

//Task 4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

//Task 5
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
let i = 0
while(i < 3)
{
    alert( `number ${i}!` );
    i++
}

//Task 6
let number;
do {
    number = prompt("Please write the number greater than 100?", 0);
} while (number && number <= 100);




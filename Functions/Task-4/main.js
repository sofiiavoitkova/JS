let x = prompt("Please enter x: ", '');
let n = prompt("Please enter n: ", '');

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

if (n >= 1) {
    alert(pow(x, n));
} else {
    alert("'n' must be a natural number!");
}
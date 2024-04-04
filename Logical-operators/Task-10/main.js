let currentUserName = prompt("Who are you?", '')

if (currentUserName = "Admin") {
    let password = prompt("Password: ", '');
    if (password == "I'm in charge") {
        alert("Hello!")
    }
    else if (currentUserName === '' || currentUserName === null) {
        alert("Canceled!")
    }
    else
    {
        alert("Password is not correct")
    }
}
else if (currentUserName === '' || currentUserName === null) {
    alert("Canceled!")

}
else {
    alert("I do not know you")
}
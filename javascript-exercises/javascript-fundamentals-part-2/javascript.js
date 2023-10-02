let currentUserName = prompt("Who's there?", "");

if (currentUserName === "Admin") {
    password = prompt("Password?", "");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === "" || password === null ){
        alert("Canceled");
    } else {
        alert("Wrong password");
    }

} else if (currentUserName === "" || currentUserName === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}

let login;
let password;

login = "admin";
password = "TheMaster";

if (login == "admin") {
    if (password == "TheMaster") {
        console.log ("Weclome");
    } else if (login == "Cancel") {
        console.log("Canceled");
    } else {
        console.log("Wrong password");
    }
} else if (login == "Cancel") {
    console.log("Canceled");
} else {
    console.log("I don`t know");
}
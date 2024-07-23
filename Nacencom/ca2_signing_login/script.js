const closedEye = document.querySelector(".login__password__hide");
const openedEye = document.querySelector(".login__password__show");
const username = document.querySelector(".login__username > input");
const password = document.querySelector(".login__password > input");
const usernameEmpty = document.querySelector(".login__username__empty");
const usernameInvalid = document.querySelector(".login__username__invalid");
const passwordEmpty = document.querySelector(".login__password__empty");
const loginButton = document.querySelector(".login__button");
openedEye.style.display = "none";
usernameEmpty.style.display = "none";
usernameInvalid.style.display = "none";
passwordEmpty.style.display = "none";
let validUsername = false;
let validPassword = false;

username.addEventListener("input", (event) => {
    let curr = event.target.value;

    if (curr.length === 0) {
        usernameInvalid.style.display = "none";
        usernameEmpty.style.display = "block";
        username.style.borderColor = "red";
        validUsername = false;
    } else {
        usernameEmpty.style.display = "none";
        username.style.borderColor = "#4371c2";
        validUsername = true;

        if (!curr.includes("@")) {
            usernameInvalid.style.display = "block";
            username.style.borderColor = "red";
            validUsername = false;
        } else {
            usernameInvalid.style.display = "none";
            username.style.borderColor = "#4371c2";
            validUsername = true;
        }
    }
});

password.addEventListener("input", (event) => {
    if (event.target.value.length === 0) {
        passwordEmpty.style.display = "block";
        password.style.borderColor = "red";
        validPassword = false;
    } else {
        passwordEmpty.style.display = "none";
        password.style.borderColor = "#4371c2";
        validPassword = true;
    }
});

closedEye.addEventListener("click", () => {
    closedEye.style.display = "none";
    openedEye.style.display = "block";
    password.setAttribute("type", "text");
});

openedEye.addEventListener("click", () => {
    closedEye.style.display = "block";
    openedEye.style.display = "none";
    password.setAttribute("type", "password");
});

loginButton.addEventListener("click", () => {
    if (validUsername && validPassword) {
        var settings = {
            url: "http://localhost:3000/api/login",
            method: "POST",
            timeout: 0,
            dataType: "json",
            data: {
                username: username.value,
                password: password.value,
            },
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    } else {
        alert("Missing Invalid Username or Password!");
    }
});

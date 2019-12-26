var email = document.getElementById("email");
var emailRegEx = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

var password = document.getElementById("password");
var passwordRegEx = /^[a-zA-Z]\w{3,14}$/;

var form = document.getElementById("form");
var errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let messages = [];

    if (emailRegEx.test(email.value) === false) {
        messages.push("Wrong email");
    }
    
    if (passwordRegEx.test(password.value) === false) {
        messages.push("Wrong password");
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
})


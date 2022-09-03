function warning() {
    let output = "You need to login to generate";
    document.querySelector("#output").innerHTML = output;
}

function loginForm() {
    let email = document.querySelector("#email-input").value;
    let password = document.querySelector("#password-input").value;

    let finalMessage;
    if (email === "example123@gmail.com" && password.length >= 8) {
        window.location = 'logged.html';
    }
    else if (email !== "example123@gmail.com" && password.length >= 8) {
        finalMessage = "Email is incorrect. Please try again!";
    }
    else if (email === "example123@gmail.com" && password.length < 8) {
        finalMessage = "Password is incorrect. Please try again!";
    }
    else if (email !== "example123@gmail.com" && password.length < 8) {
        finalMessage = "Email and Password are incorrect. Please try again!";
    }
    document.querySelector("#login-fail").innerHTML = finalMessage;
}

function generatePasswords() {
    let input = document.querySelector("#input").value;
    let password = "";
    let finalPassword;
    let letters = "ABCDEFGHIJKLMNOPQTSWXYZabcdefghijklmnopqtswxyz1234567890";
    let lettersLength = letters.length;

    for (let i = 0; i < lettersLength; i++) {
        password+=letters.charAt(Math.floor(Math.random() * lettersLength));
    }
    finalPassword = password.substring(0, input);
    document.querySelector("#final-password").innerHTML = finalPassword;
}
let controller = {}
controller.login = (data) => {
    let i = 0;
    document.getElementById("passwordError").innerHTML = ""
    document.getElementById("emailError").innerHTML = ""
    if (data.email === "" || data.email.trim() === "") {
        document.getElementById('emailError').innerHTML = "Please input your email"
        i++;
    }
    if (data.password === "" || data.password.trim() === "") {
        document.getElementById('passwordError').innerHTML = "Please input your password"
        i++;
    }
    if (i > 0) return;
    model.login(data)
}
controller.register = (data) => {
    let i = 0;
    document.getElementById('your-name-error').innerHTML = ""
    document.getElementById('email-error').innerHTML = ""
    document.getElementById('password-error').innerHTML = ""
    document.getElementById('confirmPassword-error').innerHTML = ""
    if (data.yourName === "" || data.yourName.trim() === "") {
        document.getElementById('your-name-error').innerHTML = "Please input your name"
        i++;
    }
    if (data.email === "" || data.email.trim() === "") {
        document.getElementById('email-error').innerHTML = "Please input your email"
        i++;
    }
    if (data.password === "" || data.password.trim() === "") {
        document.getElementById('password-error').innerHTML = "Please input your password"
        i++;
    }
    if (data.confirmPassword === "" || data.confirmPassword.trim() === "") {
        document.getElementById('confirmPassword-error').innerHTML = "Please confirm your password"
        i++;
    }
    if (data.password != data.confirmPassword) {
        document.getElementById('confirmPassword-error').innerHTML = "Your confirmation of password is incorrect, please try again"
        i++;
    }
    if (i > 0) return;

    model.register(data)
}
controller.changeGender = (num) => {
    if (num == 0) return "Male";
    if (num == 1) return "Female";
    if (num == 2) return "Both";
}

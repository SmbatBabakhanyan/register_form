function validReg() {
    var register = document.getElementById("formReg");
    var fail = false;
    var email = register.email.value;
    var emailValid = /[0-9a-z_-]+@[0-9a-z_-]+|.[a-z]{2.5}/i;
    var password = register.password.value;
    var RePassword = register.RePassword.value;
    var passw = /^[A-Za-z]\w{7,14}$/;
    const myObj = {};
    if (email.split('@').length - 1 == 0) {
        fail = "email false";
    }
    else if (password.split(passw).length - 1 == 0) {
        fail = "psw false";
    }
    else if (password != RePassword) {
        fail = "RePassword false";
    }
    fail ? alert(fail) : localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
}
function validLogin() {
    var login = document.getElementById("formLogin");
    var email = login.email.value;
    var psw = login.password.value;
    var item = JSON.parse(localStorage.getItem("email"));
    var loginPsw = JSON.parse(localStorage.getItem("password"));
    email == item && psw == loginPsw ? alert("succses") : alert("wrong");
}
// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let username =
        document.getElementById("loginUser").value;

        let password =
        document.getElementById("loginPass").value;

        let error =
        document.getElementById("loginError");

        if (username == "" || password == "") {

            error.innerHTML =
            "Username dan Password wajib diisi";

            error.style.color = "red";

        }

        else {

            error.innerHTML =
            "Login berhasil";

            error.style.color = "green";

            localStorage.setItem(
                "username",
                username
            );

            setTimeout(function(){

                window.location.href =
                "dashboard.html";

            },1000);

        }

    });

}



// REGISTER

const registerForm =
document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit",
    function(event){

        event.preventDefault();

        let nama =
        document.getElementById("regNama").value;

        let email =
        document.getElementById("regEmail").value;

        let password =
        document.getElementById("regPass").value;

        let confirm =
        document.getElementById("regConfirm").value;

        let error =
        document.getElementById("registerError");

        if(
            nama == "" ||
            email == "" ||
            password == "" ||
            confirm == ""
        ){

            error.innerHTML =
            "Semua data wajib diisi";

            error.style.color = "red";

        }

        else if(password != confirm){

            error.innerHTML =
            "Password tidak sama";

            error.style.color = "red";

        }

        else{

            error.innerHTML =
            "Register berhasil";

            error.style.color = "green";

        }

    });

}



// LUPA PASSWORD

const forgotForm =
document.getElementById("forgotForm");

if(forgotForm){

    forgotForm.addEventListener("submit",
    function(event){

        event.preventDefault();

        let email =
        document.getElementById("forgotEmail").value;

        let error =
        document.getElementById("forgotError");

        if(email == ""){

            error.innerHTML =
            "Email wajib diisi";

            error.style.color = "red";

        }

        else{

            error.innerHTML =
            "Link reset password berhasil dikirim";

            error.style.color = "green";

        }

    });

}



// DASHBOARD

const welcome =
document.getElementById("welcomeText");

if(welcome){

    let username =
    localStorage.getItem("username");

    if(username){

        welcome.innerHTML =
        "Selamat Datang, " +
        username;

    }

} 
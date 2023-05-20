//implement your code here
let regexName = new RegExp(`^[a-zA-Z ]*$`);
let regexEmail = new RegExp(`^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$`);
let regexPassword = new RegExp(`^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$`);

let registerForm = document.querySelector("form");

let fullName = document.querySelector("input[type=text]");
let nameError = document.querySelector(".nameError");

let email = document.querySelector("input[type=email]");
let emailError = document.querySelector(".emailError");

let password = document.querySelector("input[type=password]");
let passwordError = document.querySelector(".passwordError");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!regexName.test(fullName.value) || fullName.value == "") {
        nameError.innerHTML = "نام کامل را به درستی وارد کنید.";
    } else {
        nameError.innerHTML = "";
    }

  console.log(regexEmail.test(email.value));
    if (!regexEmail.test(email.value)) {
        emailError.innerHTML = "ایمیل را به درستی وارد کنید.";
    } else {
        emailError.innerHTML = "";
    }

    if (!regexPassword.test(password.value)) {
        passwordError.innerHTML =
            "رمز عبور باید شامل حداقل 8 کاراکتر باشد و شامل حداقل یک عدد، یک حرف بزرگ و یک حرف کوچک باشد.";
    } else {
      passwordError.innerHTML = "";
    }
});

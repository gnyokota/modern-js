const validateName = () => {
    const name = document.getElementById("name");
    const reg = /^[A-Za-z]{2,10}$/;
    if (!reg.test(name === null || name === void 0 ? void 0 : name.value)) {
        name.classList.add("is-invalid");
    }
    else {
        name.classList.remove("is-invalid");
    }
};
document.getElementById("name").addEventListener("blur", validateName);
const validatePhone = () => {
    const phone = document.getElementById("phone");
    const reg = /^[0-9]{4}-[0-9]{4}$/;
    if (!reg.test(phone === null || phone === void 0 ? void 0 : phone.value)) {
        phone.classList.add("is-invalid");
    }
    else {
        phone.classList.remove("is-invalid");
    }
};
document.getElementById("phone").addEventListener("blur", validatePhone);
const validateEmail = () => {
    const email = document.getElementById("email");
    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!reg.test(email === null || email === void 0 ? void 0 : email.value)) {
        email.classList.add("is-invalid");
    }
    else {
        email.classList.remove("is-invalid");
    }
};
document.getElementById("email").addEventListener("blur", validateEmail);

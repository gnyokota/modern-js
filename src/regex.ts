const validateName = () => {
  const name = document.getElementById("name") as HTMLInputElement;
  const reg = /^[A-Za-z]{2,10}$/;

  if (!reg.test(name?.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
};

///blur is the oposite of focus
document.getElementById("name").addEventListener("blur", validateName);

const validatePhone = () => {
  const phone = document.getElementById("phone") as HTMLInputElement;
  const reg = /^[0-9]{4}-[0-9]{4}$/;

  if (!reg.test(phone?.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
};

document.getElementById("phone").addEventListener("blur", validatePhone);

const validateEmail = () => {
  const email = document.getElementById("email") as HTMLInputElement;
  const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!reg.test(email?.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
};

document.getElementById("email").addEventListener("blur", validateEmail);

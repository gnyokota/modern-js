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

//destructuring
const Person = {
  firstName: "Anne Doe",
  email: "annDoes@email.com",
  phone: "1111-222",
};

const {firstName, email, phone} = Person;
console.log({firstName});

//maps:
const mapOne = new Map();
const keyOne = "something";
const keyTwo = {};

mapOne.set(keyOne, "value of keyOne");
mapOne.set(keyTwo, "value of keyTwo");

for (let [key, value] of mapOne) {
  console.log(`key:${key} and value:${value}`);
}

//sets:
const setOne = new Set();
setOne.add("a string");
setOne.add({name: "John"});
console.log({setOne});
const value = setOne.values();
for (let item of setOne) {
  console.log(item);
}

function submitData() {
  let firstnameDOM = document.querySelector('input[name="firstname"]');
  let lastnameDOM = document.querySelector('input[name="lastname"]');
  let ageDOM = document.querySelector('input[name="age"]');
  let genderDOM = document.querySelectorAll("input[name=gender]:checked")[0];
  let interestsDOM = document.querySelectorAll("input[name=interest]:checked");
  let descriptionDOM = document.getElementById("description");
  let interest = "";

  for (let i = 0; i < interestsDOM.length; i++) {
    interest += interestsDOM[i].value + ",";
  }

  let userData = {
    firstname: firstnameDOM.value,
    lastname: lastnameDOM.value,
    age: ageDOM.value,
    gender: genderDOM.value,
    interests: interest,
    description: descriptionDOM.value,
  };
  console.log("Submit data", userData);
}
document.getElementById("btn").addEventListener("click", submitData);

function submitData() {
  let firstnameDOM = document.querySelector('input[name="firstname"]');
  let lastnameDOM = document.querySelector('input[name="lastname"]');
  let ageDOM = document.querySelector('input[name="age"]');
  let genderDOM = document.querySelectorAll("input[name=gender]:checked");
  let interestsDOM = document.querySelectorAll("input[name=interest]:checked");
  let descriptionDOM = document.querySelector('textarea[name="description"]');
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
  };
  console.log("submitdata", userData);
}

const validateData = (userData) => {
  let errors = [];
  if (!userData.firstname) {
    errors.push("กรุณากรอกชื่อ ");
  }
  if (!userData.lastname) {
    errors.push("กรุณากรอกนามสกุล");
  }
  if (!userData.age) {
    errors.push("กรุณากรอกอายุ");
  }
  if (!userData.gender) {
    errors.push("กรุณาเลือกเพศ");
  }
  if (!userData.interest) {
    errors.push("กรุณาเลือกความสนใจ");
  }
  if (!userData.description) {
    errors.push("กรุณากรอกคำอธิบาย");
  }
  return errors;
};

const submitData = async () => {
  let firstnameDOM = document.querySelector('input[name="firstname"]');
  let lastnameDOM = document.querySelector('input[name="lastname"]');
  let ageDOM = document.querySelector('input[name="age"]');
  let genderDOM = document.querySelector("input[name=gender]:checked") || {};
  let interestsDOM = document.querySelectorAll("input[name=interest]:checked");
  let descriptionDOM = document.getElementById("description");

  try {
    let interest = "";
    for (let i = 0; i < interestsDOM.length; i++) {
      interest += interestsDOM[i].value + ",";
    }

    let userData = {
      firstname: firstnameDOM.value,
      lastname: lastnameDOM.value,
      age: ageDOM.value,
      gender: genderDOM.value,
      interest: interest,
      description: descriptionDOM.value,
    };

    const errors = validateData(userData);

    // if (errors.length > 0) {
    //   throw {
    //     message: "กรุณากรอกข้อมูลให้ครบ",
    //     error: errors,
    //   };
    // }
    let message = document.getElementById("message");
    message.style.display = "block";
    const response = await axios.post("http://localhost:8000/users", userData);
    console.log("Submit data", userData);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
    console.log(error.error);
    if (error.response) {
      console.log(error.response.data.message);
      error.message = error.response.data.message;
      error.errors = error.response.data.errors;
    }

    let danger = document.querySelector(".danger");
    danger.innerHTML = "บันทึกไม่สำเร็จ";

    let htmlData = "<div>";
    htmlData += `<div>${error.message}</div>`;
    htmlData += "<ul>";
    for (let i = 0; i < error.error.length; i++) {
      htmlData += `<div>${error.error[i]}</div>`;
    }
    htmlData += "</ul>";
    htmlData += "</div>";

    danger.innerHTML = htmlData;
  }
};

document.getElementById("btn").addEventListener("click", submitData);

// console.log("testing")
let num;
const generate_number = () => {
  num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
};

const generate_num_btn_click = () => {
  document.querySelector("#sec-1").style.display = "none";
  document.querySelector("#sec-2").style.display = "none";
  document.querySelector("#sec-3").style.display = "block";

  setTimeout(() => {
    generate_number();
    document.querySelector("#sec-1").style.display = "none";
    document.querySelector("#sec-2").style.display = "block";
    document.querySelector("#sec-3").style.display = "none";
    document.querySelector("#inp_field").value = "";
    document.querySelector("#inp_field").focus();
  }, 2000);
};

// check no

const check_number = () => {
  let val = document.querySelector("#inp_field").value;
  if (val == "") {
    alert("pls enter value between 1-6");
  } else {
    if (val == num) {
      alert("winner Winner Chicken Dinner");
      generate_num_btn_click();
    } else {
      alert("Oops! You Loose.....");
      generate_num_btn_click();
    }
  }
};

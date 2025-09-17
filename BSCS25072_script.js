const stock = {
    p1:true,
    p2:false,
    p3:true,
    p4:true,
    p5:true,
    p6:false,
    p7:true,
    p8:false,
    p9:true,
    p10:true,
    p11:true,
    p12:true,
    p13:false,
    p14:false,
    p15:true,
    p16:true,

};

function checkStock(id) {
  const statusElement = document.getElementById(id + "-status");
  if (stock[id]) {
    statusElement.innerHTML = "<span style='color:green;'>In Stock </span>";
  } else {
    statusElement.innerHTML = "<span style='color:red;'>Out of Stock </span>";
  }
}


function greet() {
alert("Welcome to my website!");
}

const year = new Date().getFullYear();
document.getElementById("year").textContent = year;


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function getBotResponse(input) {
if (input.includes("hello") || input.includes("hi")) {
// return with message
} 
}

function validateForm() {
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();


if (name === "" || email === "" || message === "") {
    error.textContent = "All fields are required!";
    return false; 
  }

  const emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailpattern.test(email)){
    error.textContent = "Enter valid email address";
return false;
  }
}  
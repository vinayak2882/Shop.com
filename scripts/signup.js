
  document.querySelector("#form").addEventListener("submit", signup);
var data01 =JSON.parse(localStorage.getItem("datasavelocal"))||[]
  function signup() {
    event.preventDefault();

    var Name = document.querySelector("#name").value;
    var Contact = document.querySelector("#contact").value;
    var Email = document.querySelector("#email").value;
    var Password = document.querySelector("#password").value;

    var userdata = {
      name: Name,
      contact: Contact,
      email: Email,
      password: Password,
    };


    if(Name==""||Contact==""||Email==""||Password==""){
        alert("Fill All Details")
    }
    else{
data01.push(userdata);

localStorage.setItem("datasavelocal",JSON.stringify(data01));
alert("SignUp Successful");
window.location.href="signin.html"
    }
    console.log(userdata)
  }
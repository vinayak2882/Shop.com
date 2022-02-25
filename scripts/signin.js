
  document.querySelector("#formlogin").addEventListener("submit", signin);

  var reusedata = JSON.parse(localStorage.getItem("datasavelocal")); //datasavelocal
  console.log(reusedata);

  function signin() {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
console.log(email,password)
    var flag = false;
    for (var i = 0; i < reusedata.length; i++) {
      if (reusedata[i].email == email && reusedata[i].password == password) {
         window.location.href="signup.html"
        flag = true;
      }
    }
    if (flag) {
      alert("Signin Successfully");
      window.location.href = "index.html";
    } else {
      alert("invalid Credentials");
      // window.location.href = "888";
    }
  }
  signin();

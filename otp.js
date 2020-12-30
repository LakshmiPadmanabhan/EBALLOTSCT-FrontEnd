var v2 = sessionStorage.getItem("name")
var v3 = sessionStorage.getItem("_id")
var v4 = sessionStorage.getItem("year")
var v5 = sessionStorage.getItem("department")
var v6 = sessionStorage.getItem("password")
var v7 = sessionStorage.getItem("gender")
var v8 = sessionStorage.getItem("email")
var v9 = document.getElementById("inputotp")
var xhttp = new XMLHttpRequest();
var xhttp1 = new XMLHttpRequest();
function submitotp() {
    console.log("Hiiii")
    if (v9.value) {
        xhttp.open("POST", "http://localhost:3000/verify", true);
        xhttp.setRequestHeader("Content-type", "application/JSON");
        var postbody = { "otp": v9.value }
        var json = JSON.stringify(postbody)
        console.log(json)
        xhttp.send(json)
    }
    else {
        alert("ENTER OTP")
    }
}

xhttp.onreadystatechange = function () {
    console.log("hi")
    var myJSON = JSON.parse(this.responseText);
    console.log(myJSON["message"])
    if (myJSON["message"] == 'You has been successfully registered') {
        xhttp.open("POST", "http://localhost:3000/insertStudent", true);
        xhttp.setRequestHeader("Content-type", "application/JSON");
        var postbody = { "_id": v3, "name": v2, "year": v4, "department": v5, "password": v6, "email_id": v8, "gender": v7 }
        var json = JSON.stringify(postbody)
        console.log(json)
        xhttp.send(json)
        xhttp.onreadystatechange = function () {
            var myJSON = JSON.parse(this.responseText);
            console.log(myJSON["message"])
            if (myJSON["message"] == 'List Creation Succesful') {
                alert("Registration Succesful")
                window.location.href = window.location.href = "D:/Design/DESIGN_UI/index.html";
            }
            else {
                alert("You have already Registered")
            }
        }
    }
    else {
        alert("Incorrect OTP")
    }
}
function resendotp() {
    xhttp1.open("POST", "http://localhost:3000/resend", true);
    xhttp1.setRequestHeader("Content-type", "application/JSON");
    xhttp1.send()
}
xhttp1.onreadystatechange = function() {
	console.log("hi")
    var myJSON = JSON.parse(this.responseText);
  if (this.status==500) {
    console.log(myJSON)	
  }
  else{
    console.log(myJSON["message"])
    alert(myJSON["message"])
  }
}
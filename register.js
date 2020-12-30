var v1 = document.getElementById("box1")
var v2 = document.getElementById("inputname")
var v3 = document.getElementById("inputadmno")
var v4 = document.getElementById("inputyear")
var v5 = document.getElementById("inputdept")
var v6 = document.getElementById("inputpassword")
var v7 = document.getElementById("inputgender")
var v8 = document.getElementById("inputemail")
var v9 = document.getElementById("result")
var xhttp = new XMLHttpRequest();
v1.addEventListener('submit', function (event) {
	if (v2.value && v3.value && v4.value && v5.value && v6.value && v7.value && v8.value) {
		event.preventDefault();
		xhttp.open("POST", "http://localhost:3000/send", true);
		xhttp.setRequestHeader("Content-type", "application/JSON");
		var postbody = { "name": v2.value, "email": v8.value, "_id": v3.value }
		var json = JSON.stringify(postbody)
		console.log(json)
		xhttp.send(json)
		sessionStorage.setItem("name", v2.value)
		sessionStorage.setItem("_id", v3.value)
		sessionStorage.setItem("year", v4.value)
		sessionStorage.setItem("password", v6.value)
		sessionStorage.setItem("gender", v7.value)
		sessionStorage.setItem("email", v8.value)
		sessionStorage.setItem("department", v5.value)
	}
	else {
		alert("PLEASE ENTER ALL DETAILS")
		event.preventDefault();
	}
})
xhttp.onreadystatechange = function() {
	console.log("hi")
    var myJSON = JSON.parse(this.responseText);
  if (this.status==500) {
    console.log(myJSON)
    window.location.href=window.location.href="D:/Design/DESIGN_UI/otp.html";
	
  }
  else{
    console.log(myJSON["message"])
    alert(myJSON["message"])
  }
}


var v1 = document.getElementById('message')
var x = sessionStorage.getItem("username")
console.log(x);
v1.innerText = "Welcome   " + x;
var d = new Date();
var date = d.toString()
date = date.slice(0, date.indexOf("G"))
document.getElementById("date").innerHTML = date;
function myfn() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Failed")
        }
    };
    xhttp.open("GET", "http://localhost:3000/setupStudentDB", true);
    xhttp.send();
    document.getElementById("demo").innerHTML = "Student DB Setup Successful";
}

function myfn1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Failed")
        }
    };
    xhttp.open("GET", "http://localhost:3000/setupCandidateDB", true);
    xhttp.send();
    document.getElementById("demo").innerHTML = "Candidate DB Setup Successful";
}
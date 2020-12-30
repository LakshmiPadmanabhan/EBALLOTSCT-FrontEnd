var v= document.getElementById('message')
var x=sessionStorage.getItem("username")
console.log(x);
v.innerText="Welcome   "+x;

var v1=document.getElementById("box1")
var v2=document.getElementById("InputCName")
var v3=document.getElementById("InputCAdmno")
var v4=document.getElementById("inputStateCYear")
var v5=document.getElementById("inputStateCDept")
var v6=document.getElementById("inputStateCParty")
var v7=document.getElementById("inputStateCPromise")
var v8=document.getElementById("result")
var v9=document.getElementById("InputCPosition")
console.log(v1)
var xhttp = new XMLHttpRequest();

v1.addEventListener('submit',function(event){
	if(v2.value && v3.value && v4.value!="Year" && v5.value!="Department" && v6.value !="Students Union" && v7.value && v9.value){
		event.preventDefault();
		xhttp.open("POST", "http://localhost:3000/insertCandidate", true);
		xhttp.setRequestHeader("Content-type", "application/JSON");
		var postbody={"_id":v3.value,"name":v2.value,"year":v4.value,"department":v5.value,"party":v6.value,"promise":v7.value,"position":v9.value}
		json=JSON.stringify(postbody)
		console.log(json)
		xhttp.send(json)
		
	}
	else{
		alert("ENTER ALL VALUES")
		event.preventDefault();
	}
})
xhttp.onreadystatechange = function() {
	var myJSON = JSON.parse(this.responseText);
	console.log(myJSON["message"])
  	if ( this.status == 200) {
    alert("Added Candidate")
   
  	}
  	else{
    alert("Failed Candidate Addition")
   
  }
}


    


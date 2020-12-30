var c1a = document.getElementById("c1name");
var c1b = document.getElementById("c1dept");
var c1c = document.getElementById("c1year");
var c1d = document.getElementById("c1party");
var c1e = document.getElementById("c1promises");

var c2a = document.getElementById("c2name");
var c2b = document.getElementById("c2dept");
var c2c = document.getElementById("c2year");
var c2d = document.getElementById("c2party");
var c2e = document.getElementById("c2promises");

var c3a = document.getElementById("c3name");
var c3b = document.getElementById("c3dept");
var c3c = document.getElementById("c3year");
var c3d = document.getElementById("c3party");
var c3e = document.getElementById("c3promises");

var c4a = document.getElementById("c4name");
var c4b = document.getElementById("c4dept");
var c4c = document.getElementById("c4year");
var c4d = document.getElementById("c4party");
var c4e = document.getElementById("c4promises");

function myFunction() {
  var i1 = document.getElementById("image1")
  i1.src = 'imageskac/sctce.jpeg'
  c1a.innerText = "SCTCE Welcomes You"
  var i2 = document.getElementById("image2")
  i2.src = 'imageskac/sct2.jpg'
  c2a.innerText = "Cast Your Vote"
  var i3 = document.getElementById("image3")
  i3.src = 'imageskac/sct1.jpg'
  c3a.innerText = "Through EBALLOT SCTCE"
  var i4 = document.getElementById("image4")
  i4.src = 'imageskac/sct3.jfif'
}

function loadDoc() {
  var i1 = document.getElementById("image1")
  i1.src = 'imageskac/2.jpg'
  var i2 = document.getElementById("image2")
  i2.src = 'imageskac/3.png'
  var i3 = document.getElementById("image3")
  i3.src = 'imageskac/4.jpg'
  var i4 = document.getElementById("image4")
  i4.src = 'imageskac/5.png'
  c1a.innerText = "No Available Information"
  c1b.innerText = " "
  c1c.innerText = " "
  c1d.innerText = " "
  c1e.innerText = " "

  c2a.innerText = "No Available Information"
  c2b.innerText = " "
  c2c.innerText = " "
  c2d.innerText = " "
  c2e.innerText = " "

  c3a.innerText = "No Available Information"
  c3b.innerText = " "
  c3c.innerText = " "
  c3d.innerText = " "
  c3e.innerText = " "

  c4a.innerText = "No Available Information"
  c4b.innerText = " "
  c4c.innerText = " "
  c4d.innerText = " "
  c4e.innerText = " "

  var e = document.getElementById("inputOption");
  var text = e.options[e.selectedIndex].text
  if (text != "Filter BY Position") {
    console.log("Hello")
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/getCandidate", true);
    xhttp.setRequestHeader("Content-type", "application/JSON");

    var obj = { "position": text }
    var json = JSON.stringify(obj)
    xhttp.send(json);
    xhttp.onreadystatechange = function () {
      console.log(json)
      if (this.readyState == 4 && this.status == 200) {
        var myJSON;
        myJSON = (this.responseText);
        var jsonResponse;
        console.log(myJSON)
        jsonResponse = JSON.parse(myJSON);
        console.log(jsonResponse)
        if (jsonResponse[0]["name"] != "NOTA") {
          c1a.innerText = jsonResponse[0]["name"]+"("+jsonResponse[0]["_id"]+")"
          c1b.innerText = "Department: " + jsonResponse[0]["department"]
          c1c.innerText = "Year: " + jsonResponse[0]["year"]
          c1d.innerText = "Student's Union: " + jsonResponse[0]["party"]
          c1e.innerText = "My Promises: " + jsonResponse[0]["promise"]
        }
        else
          c1a.innerText = "NOTA"
        if (jsonResponse[1]["name"] != "NOTA") {
          c2a.innerText = jsonResponse[1]["name"]+"("+jsonResponse[1]["_id"]+")"
          c2b.innerText = "Department: " + jsonResponse[1]["department"]
          c2c.innerText = "Year: " + jsonResponse[1]["year"]
          c2d.innerText = "Student's Union: " + jsonResponse[1]["party"]
          c2e.innerText = "My Promises: " + jsonResponse[1]["promise"]
        }
        else
          c2a.innerText = "NOTA"
        if (jsonResponse[2]["name"] != "NOTA") {
          c3a.innerText = jsonResponse[2]["name"]+"("+jsonResponse[2]["_id"]+")"
          c3b.innerText = "Department: " + jsonResponse[2]["department"]
          c3c.innerText = "Year: " + jsonResponse[2]["year"]
          c3d.innerText = "Student's Union: " + jsonResponse[2]["party"]
          c3e.innerText = "My Promises: " + jsonResponse[2]["promise"]
        }
        else
          c3a.innerText = "NOTA"
        if (jsonResponse[3]["name"] != "NOTA") {
          c4a.innerText = jsonResponse[3]["name"]+"("+jsonResponse[3]["_id"]+")"
          c4b.innerText = "Department: " + jsonResponse[3]["department"]
          c4c.innerText = "Year: " + jsonResponse[3]["year"]
          c4d.innerText = "Student's Union: " + jsonResponse[3]["party"]
          c4e.innerText = "My Promises: " + jsonResponse[3]["promise"]
        }
        else
          c4a.innerText = "NOTA"
      }
    }
  }
  else {
    alert("Enter a Valid Position")
  }

}
var v1 = document.getElementById('message')
var x = sessionStorage.getItem("username")

v1.innerText = "Welcome   " + x;
var dept = sessionStorage.getItem('department')
var gender = sessionStorage.getItem('gender')
var year = sessionStorage.getItem('year')


x = document.getElementById('Chairman')
var y = document.getElementById('ViceChairman')
var zz = document.getElementById('GeneralSecretary')
var acs = document.getElementById('ArtsClubSecretary')
var b = document.getElementById('SportsSecretary')
var c = document.getElementById('UUC-1')
var d = document.getElementById('UUC-2')
var e = document.getElementById('MagazineEditor')
var f = document.getElementById('LadyRep1')
var g = document.getElementById('LadyRep2')
var h = document.getElementById('csa')
var yr = document.getElementById('first')


if (dept == 'Mechanical Engineering')
  dept = 'Mech Association Secretary'
else if (dept == 'Computer Science')
  dept = 'CS Association Secretary'
else if (dept == 'Mechanical Production Engineering')
  dept = 'Mech Prod Association Secretary'
else if (dept == 'Mechanical Automobile Engineering')
  dept = 'Mech Auto Association Secretary'
else if (dept == 'Electronics & Communication Engineering (A)' || dept == 'Electronics & Communication Engineering (B)')
  dept = 'EC Association Secretary'
else if (dept == 'Biotechnology Engineering')
  dept = 'BT Association Secretary'
var jsonResponse
var a = new Array()
function onscreen() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/getAllCandidates", true);
  xhttp.send()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myJSON;
      myJSON = (this.responseText);
      console.log(myJSON)
      jsonResponse = JSON.parse(myJSON);
      console.log(jsonResponse)
    }

    for (var i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "Chairman") {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        x.insertBefore(option, x.lastChild)
      }
    }
  
    for (i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "Vice Chairman") {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        y.insertBefore(option, y.lastChild)
      }
    }
   
    for (var i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "General Secretary") {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        zz.insertBefore(option, zz.lastChild)
      }
    }
    
    for (i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "Arts Club Secretary") {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        acs.insertBefore(option, acs.lastChild)
      }
    }
   
    for (var i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "Sports Secretary") {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        b.insertBefore(option, b.lastChild)
      }
    }
   
    for (i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "UUC-1") {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        c.insertBefore(option, c.lastChild)
      }
    }
    
    for (var i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "UUC-2") {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        d.insertBefore(option, d.lastChild)

      }
    }
  
    for (i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "Magazine Editor") {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        e.insertBefore(option, e.lastChild)
      }
    }
  
    for (var i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "Lady Rep- 1" && gender != 'Male') {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        f.insertBefore(option, f.lastChild)
      }
    }
  
    for (i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == "Lady Rep- 2" && gender != 'Male') {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        g.insertBefore(option, g.lastChild)
      }
    }
    
    for (var i = 0; i < jsonResponse.length; i++) {
      if (jsonResponse[i]["position"] == dept) {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        h.insertBefore(option, h.lastChild)
      }
    }
   
    for (var i = 0; i < jsonResponse.length; i++) {
      if ((jsonResponse[i]["year"] == year) && (jsonResponse[i]["position"] == 'First Year Rep' ||
        jsonResponse[i]["position"] == 'Second Year Rep' || jsonResponse[i]["position"] == 'Third Year Rep' ||
        jsonResponse[i]["position"] == 'Fourth Year Rep')) {
        var option = document.createElement("option")
        var text = document.createTextNode(jsonResponse[i]["name"]+"("+jsonResponse[i]["_id"]+")")
        option.appendChild(text)
        yr.insertBefore(option, yr.lastChild)
      }
    }
   
  }
}
function myFn() {
  console.log(y.value)
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(x.value).slice((x.value).indexOf('(')+1,(x.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(y.value).slice((y.value).indexOf('(')+1,(y.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(zz.value).slice((zz.value).indexOf('(')+1,(zz.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(acs.value).slice((acs.value).indexOf('(')+1,(acs.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(b.value).slice((b.value).indexOf('(')+1,(b.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(c.value).slice((c.value).indexOf('(')+1,(c.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(d.value).slice((d.value).indexOf('(')+1,(d.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(e.value).slice((e.value).indexOf('(')+1,(e.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(f.value).slice((f.value).indexOf('(')+1,(f.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(g.value).slice((g.value).indexOf('(')+1,(g.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(h.value).slice((h.value).indexOf('(')+1,(h.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(yr.value).slice((yr.value).indexOf('(')+1,(yr.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/Voting", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var p=(y.value).slice((y.value).indexOf('(')+1,(y.value).indexOf(')'))
  p=parseInt(p)
  var postbody = { "id": p }
  var json = JSON.stringify(postbody)
  xhttp.send(json)


  y = sessionStorage.getItem("_id")
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/submitVote", true);
  xhttp.setRequestHeader("Content-type", "application/JSON");
  var postbody = { "_id": y }
  var json = JSON.stringify(postbody)
  xhttp.send(json)
  xhttp.onreadystatechange = function () {
    console.log("hi")
    var myJSON = JSON.parse(this.responseText);
    
      console.log(myJSON)
      alert("Vote Submitted Succesfully")
      window.location.href = window.location.href = "D:/Design/DESIGN_UI/index.html";

    }
  }

var v1 = document.getElementById('message')
var x = sessionStorage.getItem("username")
console.log(x);
v1.innerText = "Welcome   " + x;
var heading= new Array()

function add() {
    var myTableDiv = document.getElementById("myTable");
    var table = document.createElement('TABLE');
    table.border='1';
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
            heading[0] = "Admission Id:"
            heading[1] = "Full Name"
            heading[2] = "Position"
            heading[3] = "Delete"
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);
            for (i = 0; i < heading.length; i++) {
                var th = document.createElement('TH')
                th.width = '300';
                th.appendChild(document.createTextNode(heading[i]));
                th.setAttribute("style","text-align:center")
                th.style.border = 'solid 1px black';
                tr.appendChild(th);

            }
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/getAllCandidates", true);
    xhttp.send()
    xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myJSON;
            myJSON = (this.responseText);
            console.log(myJSON)
            jsonResponse = JSON.parse(myJSON);
            console.log(jsonResponse[0]["name"]) 
            console.log(typeof(jsonResponse[0]["name"]))  
          }

    for (i = 0; i < jsonResponse.length; i++) {
        var tr = document.createElement('TR');
        var x=jsonResponse[i]
        console.log(x["name"])
        if(x["name"]!="NOTA"){
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(x["_id"]));
        td.setAttribute("style","width:90px")
        td.style.border = 'solid 1px black';
        tr.appendChild(td)
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(x["name"]));
        td.setAttribute("style","width:90px")
        td.style.border = 'solid 1px black';
        tr.appendChild(td)
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(x["position"]));
        td.setAttribute("style","width:90px")
        td.style.border = 'solid 1px black';
        tr.appendChild(td)
        var btn=document.createElement('input')
        btn.type='button'
        btn.value="Delete"
        btn.setAttribute("style","width:100px","padding:0px")
        btn.onclick=function() {
            var index = this.parentNode.parentNode.rowIndex;
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "http://localhost:3000/DeleteCandidate", true);
            xhttp.setRequestHeader("Content-type", "application/JSON");
            console.log(this)
            var obj={"_id":table.rows[index].cells[0].innerText}
            var json=JSON.stringify(obj)
            xhttp.send(json);
            xhttp.onreadystatechange = function() {
            console.log(json)
            if (this.readyState == 4 && this.status == 200) {
                var myJSON;
                myJSON = (this.responseText);
                var jsonResponse;
                console.log(myJSON)
                jsonResponse = JSON.parse(myJSON);
                console.log(jsonResponse)
                }
            }
            table.deleteRow(index)
        }
        var td = document.createElement('TD')
        td.style.border = 'solid 1px black';
        td.appendChild(btn);
        tr.appendChild(td)
        tableBody.appendChild(tr);
        }
    }
    }
    myTableDiv.appendChild(table);
}
function takeprint() {
    print()
}  
function renovationXML() {
    var renXml = new XMLHttpRequest();
  
    console.log(renXml.readyState);
  
    renXml.onreadystatechange = function () {
      console.log(renXml.readyState);
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById('customer_info').innerHTML = this.responseText;
        cusinfo(this);
        // console.log(renXml.readyState);
      }
    };
  
    renXml.open("GET", "NewFile.xml", "TRUE");
  
    renXml.send();
  }
  
  var xmlDoc;
  var table;
  var x;
  
  function cusinfo(info) {
    var i;
    xmlDoc = info.responseXML;
    // console.log(xmlDoc);
    displayTable(xmlDoc);
  }
  function displayTable(xmlDoc) {
    table = `<thead><tr>
            <th>ID</th>
           <th>Name</th>
           <th>Leave Date</th>
           <th>Status</th>
          </tr></thead>`;
  
    x = xmlDoc.getElementsByTagName("Leave");
  
    for (i = 0; i < x.length; i++) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("Leave_id")[0].childNodes[0].nodeValue +
        "</td><td data-label='Date'>" +
        x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Leave_date")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Leave_desc")[0].childNodes[0].nodeValue +
        "</td><td>" +
        "<button onclick='removecus()'> remove </button></td></tr>";
    }
    document.getElementById("Leave_info").innerHTML = table;
  }
  
  function removecus() {
    // console.log(xmlDoc.getElementsByTagName('customer')[0]);
    // var x = xmlDoc.getElementsByTagName("customer")[0];
  
    var index,
      table = document.getElementById("Leave_info");
  
    for (var i = 0; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        index = this.rowIndex;
        x = xmlDoc.getElementsByTagName("Leave")[index - 1];
        xmlDoc.documentElement.removeChild(x);
        console.log(xmlDoc);
        displayTable(xmlDoc);
      };
    }
    alert("This Employee leave detail removed!");
  }
  
  function removeNodeElement() {
    var i;
  
    for (i = 0; i < x.length; i++) {
      a = xmlDoc
        .getElementsByTagName("Leave")
        [i].getElementsByTagName("Leave_id")[0];
      b = a.childNodes[0];
      a.removeChild(b);
    }
    console.log(xmlDoc);
    table = `<thead><tr>
    <th>Name</th>
   <th>Date</th>
   <th>Leave Status</th>
  </tr></thead>`;
  var some = xmlDoc;
  x = xmlDoc.getElementsByTagName("Leave");
  
  for (i = 0; i < x.length; i++) {
  table +=
  "<tr><td>" +
  x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("Leave_date")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("Leave_desc")[0].childNodes[0].nodeValue +
  "</td><td>" +
  "<button onclick='removecus()'> remove </button></td></tr>";
  }
  document.getElementById("Leave_info").innerHTML = table;
    alert('The node element  "Leave ID" has been removed!');
  
    
  }
  
  function changeNodeValue() {
    var j;
    for (j = 0; j < x.length; j++) {
      xmlDoc
        .getElementsByTagName("Leave")
        [j].getElementsByTagName("Leave_desc")[0].childNodes[0].nodeValue="Approved";
    }
    console.log(xmlDoc);
    alert("The Leave approval status has been changed!");
    displayTable(xmlDoc);
  }
  
  function addNewElement() {
    var i;
    newEle = xmlDoc.createElement("New_Info");
    newText = xmlDoc.createTextNode("NULL");
    newEle.appendChild(newText);
    xmlDoc.getElementsByTagName("Leave")[0].appendChild(newEle);
    console.log(xmlDoc);
    alert('The new  "New info" has been added to the second node!');
    var table = `<thead><tr>

                <th>Name</th>
                <th>Leave Date</th>
                <th>Status</th>
                <th>NEW ELEMENT</th>
          </tr></thead>`;
  
    x = xmlDoc.getElementsByTagName("Leave");
  
    for (i = 0; i < x.length; i++) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Leave_date")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("Leave_desc")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[0].getElementsByTagName("New_Info")[0].childNodes[0].nodeValue +
        "<button onclick='removecus()'> remove </button></td></tr>";
    }
    document.getElementById("Leave_info").innerHTML = table;


    }
var form = document.getElementById("form");
var res = document.getElementById("res");
// var products = document.getElementById("products")
form.addEventListener("submit", add);

function add(){
    event.preventDefault();
    // name.innerHTML=""
    // price.innerHTML=""
    var name = document.getElementById("name")
    var className = document.getElementById("className")
    var classSection = document.getElementById("classSection")
    var examType = document.getElementById("examType")
    var flag = true;

     
    var tr = document.createElement("tr");
    var tr1 = document.createElement("tr");
    tr1.innerHTML =
      "<th>" +
      "NAME" +
      "<th>" +
      "Class" +
      "<th>" +
      "Section" +
      "<th>" +
      "ExamType"; // Create Table header
    var td_name = document.createElement("td");
    var td_className = document.createElement("td");
    var td_classSection = document.createElement("td");
    var td_examType = document.createElement("td")

    td_name.textContent = name.value;
    td_className.textContent = className.value;
    td_classSection.textContent = classSection.value;
    td_examType.textContent= examType.value
    
    var 
    if(flag == true){
        res.append(tr1)
        flag=false
    }

    tr.append(td_name, td_className,td_classSection, td_examType);
    res.append(tr);
}


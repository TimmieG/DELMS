var newRequest = new Array();

window.onload = init;

function init() {
    var submitButton = document.getElementById("submit");
    submitButton.onclick = getFormData;
    getNewRequestData();
}

function getNewRequestData() {
    var request = new XMLHttpRequest();
    request.open("GET", "db.json");
    request.onreadystatechange = function() {
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText) { 
                parsenewRequest(this.responseText);
                addNewRequestToPage();
            }
            else {
                console.log("Error: Data is empty");
            }
        }
    };
    request.send();
}

function parseNewRequestItems(dbJSON) {
    if (dbJSON == null || dbJSON.trim() == "") {
        return;
    }
    var newRequestArray = JSON.parse(dbJSON);
    if (newRequestArray.length == 0) {
        console.log("Error: the new request array is empty!");
        return;
    }
    for (var i = 0; i < newRequestArray.length; i++) {
        var newRequestItem = newRequestArray[i];
        newRequest.push(newRequestItem);
    }
}

function addNewRequestToPage() {
    var ul = document.getElementById("newRequest");
    for (var i = 0; i < newRequest.length; i++) {
        var newRequestItem = newRequest[i];
        var li = document.createElement("li");
        li.innerHTML =
            newRequestItem.who + " needs to go on " + newRequest.reason + " by " + newRequest.startDate + "for" + newRequest.duration;
        ul.appendChild(li);
    }
}

function getFormData() {
    var reason = document.getElementById("reason").value;
    if (checkInputText(reason, "Please enter a reason")) return;

    var who = document.getElementById("who").value;
    if (checkInputText(who, "Please enter your name")) return;

    var date = document.getElementById("startDate").value;
    if (checkInputText(date, "Please enter a start date")) return;

    var duration = document.getElementById("duration").value;
    if (checkInputText(duration, "Please enter a duration")) return;

    console.log("New request: " + reason + ", for: " + who + ", by: " + date);
    var newRequestItem = new leaveRequest(reason, who, date, duration);
    newRequest.push(newRequestItem);
    addNewRequestToPage(newRequestItem);
    saveNewRequestData();
}

function checkInputText(value, msg) {
    if (value == null || value == "") {
        alert(msg);
        return true;
    }
    return false;
} 
function addNewRequestToPage(newRequestItem) {
    var ul = document.getElementById("newRequest");
    var li = document.createElement("li");
    li.innerHTML =
        newRequestItem.who + " needs to " + newRequestItem.reason + " by " + newRequestItem.startDate + "for " + newRequestItem.duration;
    ul.appendChild(li);
    document.forms[0].reset();
}        
function savenewRequestData() {
    var newRequestJSON = JSON.stringify(newRequest);
    var request = new XMLHttpRequest();
    var URL = "save.php?data=" + encodeURI(newRequestJSON);
    request.open("GET", URL);
    request.setRequestHeader("Content-Type",
                             "text/plain;charset=UTF-8");
    request.send();
}
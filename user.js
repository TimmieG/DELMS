// var newRequest = new Array();

// window.onload = init;

// function init() {
//     var submitButton = document.getElementById("submit");
//     submitButton.onclick = getFormData;
//     getNewRequestData();
// }

// function getNewRequestData() {
//     var request = new XMLHttpRequest();
//     request.open("GET", "db.json");
//     request.onreadystatechange = function() {
//         if (this.readyState == this.DONE && this.status == 200) {
//             if (this.responseText) { 
//                 parsenewRequest(this.responseText);
//                 addNewRequestToPage();
//             }
//             else {
//                 console.log("Error: Data is empty");
//             }
//         }
//     };
//     request.send();
// }

// function parseNewRequestItems(dbJSON) {
//     if (dbJSON == null || dbJSON.trim() == "") {
//         return;
//     }
//     var newRequestArray = JSON.parse(dbJSON);
//     if (newRequestArray.length == 0) {
//         console.log("Error: the new request array is empty!");
//         return;
//     }
//     for (var i = 0; i < newRequestArray.length; i++) {
//         var newRequestItem = newRequestArray[i];
//         newRequest.push(newRequestItem);
//     }
// }

// function addNewRequestToPage() {
//     var ul = document.getElementById("newRequest");
//     for (var i = 0; i < newRequest.length; i++) {
//         var newRequestItem = newRequest[i];
//         var li = document.createElement("li");
//         li.innerHTML =
//             newRequestItem.who + " needs to go on " + newRequest.reason + " by " + newRequest.startDate + "for" + newRequest.duration;
//         ul.appendChild(li);
//     }
// }

// function getFormData() {
//     var reason = document.getElementById("reason").value;
//     if (checkInputText(reason, "Please enter a reason")) return;

//     var who = document.getElementById("who").value;
//     if (checkInputText(who, "Please enter your name")) return;

//     var date = document.getElementById("startDate").value;
//     if (checkInputText(date, "Please enter a start date")) return;

//     var duration = document.getElementById("duration").value;
//     if (checkInputText(duration, "Please enter a duration")) return;

//     console.log("New request: " + reason + ", for: " + who + ", by: " + date);
//     var newRequestItem = new leaveRequest(reason, who, date, duration);
//     newRequest.push(newRequestItem);
//     addNewRequestToPage(newRequestItem);
//     saveNewRequestData();
// }

// function checkInputText(value, msg) {
//     if (value == null || value == "") {
//         alert(msg);
//         return true;
//     }
//     return false;
// } 

// function addNewRequestToPage(newRequestItem) {
//     var ul = document.getElementById("newRequest");
//     var li = document.createElement("li");
//     li.innerHTML =
//         newRequestItem.who + " needs to " + newRequestItem.reason + " by " + newRequestItem.startDate + "for " + newRequestItem.duration;
//     ul.appendChild(li);
//     document.forms[0].reset();
// }        

// function savenewRequestData() {
//     var newRequestJSON = JSON.stringify(newRequest);
//     var request = new XMLHttpRequest();
//     var URL = "save.php?data=" + encodeURI(newRequestJSON);
//     request.open("GET", URL);
//     request.setRequestHeader("Content-Type",
//                              "text/plain;charset=UTF-8");
//     request.send();
// }

// $(function (){
//     var $requests = $('#requests');
//     var $name = $('#name');
//     var $email = $('#email');
//     var $staffId = $('#staffId');
//     var $startDate = $('#startDate');
//     var $duration = $('#duration');
//     var $reason = $('#reason');

//     var requestTemplate = "" +
//     "<li>" + "<p><strong>Name: </strong> {{name}}</p>" + 
//     "<p><strong>Email: </strong> {{email}}</p>" + 
//     "<p><strong>Staff Id: </strong>{{staffId}}</p>" +
//     "<p><strong>Start Date: </strong>{{startDate}} </p>" +
//     "<p><strong>Duration: </strong>{{duration}} </p>" + 
//     "<p><strong>Reason: </strong>{{reason}}</p>" + 
//     "<button data-id = '{{id}}' class = 'remove'>Delete</button>" + 
//     // "<button data-id = '{{id}}' class = 'edit'>Edit</button>" + 
//     "</li>";
    
//     function addRequest(request){
//         $requests.append(Mustache.render(requestTemplate, request));
//     }

//     function addRequest(request) {
//         $requests.append("<li>name: ' + request.name + ', </li>")

//     }
//     $.ajax({
//         type: 'GET',
//         success: function(requests) {
//             $.each(requests, function(i, request){
//                 addRequest(request);
//             })
//         },
//         error: function(){
//             alert('Error loading requests');
//         }
//     });
//     $('#submit').on('click', function(){

//         var order = {
//             name: $name.val(),
//             email: $email.val(),
//             staffId: $staffId.val(),
//             startDate: $startDate.val(),
//             duration: $duration.val(),
//             reason: $reason.val()
//         };

//         $.ajax({
//             type: 'POST',
//             url:'http://localhost:3000/employees/requests',
//             data: request,
//             success: function(newRequest){
//                 addRequest(newRequest);
//             },
//             error: function(){
//                 alert('error saving order');
//             }

//         })

//     })

//     $orders.delegate('.remove', 'click', function(){
        
//         var $li = $(this).closest('li');

//         $.ajax({
//             type:'DELETE',
//             url: 'http://localhost:3000/employees/requests' + $(this).attr('data-id'),
//             success: function(){
//                 $li.fadeOut(300, function(){
//                     $(this).remove();
//                 })

//             }        
//         });
//     }); 
// })

const form = document.getElementByClassName('.addRequest')[0];
const data = getFormDataAsJSON(form);
form.addEventListener('submit', handleFormSubmit);

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

    // Make sure the element has the required properties and should be added.
    if (isValidElement(element) && isValidValue(element)) {
  
      /*
       * Some fields allow for more than one value, so we need to check if this
       * is one of those fields and, if so, store the values as an array.
       */
      if (isCheckbox(element)) {
        data[element.name] = (data[element.name] || []).concat(element.value);
      } else if (isMultiSelect(element)) {
        data[element.name] = getSelectValues(element);
      } else {
        data[element.name] = element.value;
      }
    }
  
    return data;
  }, 
  
  );
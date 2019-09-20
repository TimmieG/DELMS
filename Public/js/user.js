// $(document).ready(function(){
//     $('.addRequest').submit(function(event){
//         event.preventDefault();   
         
//         var form = this;
//         var json = ConvertFormToJSON(form);
//         var tbody = jQuery('#request > tbody');

//         $.ajax({
//             type : 'POST',
//             url : 'http//localhost:3000/requests',
//             data: json,
//             contentType : 'application/json'
//         }).done(function() { 
//             tbody.append('<tr><th scope="row" ' + form["name"].value + 
//                 '"></th><td>' + form["email"].value +
//                 '</td><td>' + form["startDate"].value + '</td><td>' + form["duration"].value + 
//                 '</td><td>' + form["status"].value + '</td><td>' + '<div class="col-md-2"><div class="dropdown create"><button class="btn btn-default dropdown-toggle" type="button" id="dropMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Manage Requests<span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropMenu"><li><a href="#">Approve Request</a></li><li><a href="#">Reject Request</a></li><li><a href="#">Update Request</a></li><li><a href="#">Delete Request</a></li></ul></div></div></td>')   
//         }).fail(function() { 
//             alert("Failed to add request")
//         })
//         })
//     }
// })

$(document).ready(function(){

    $('#requestBtn').click(function(){
        var name = $("#name").val(), 
        var email = $('#email').val(),
        var staffId = $('#staffId').val(),
        var startDate = $('#startDate').val(),
        var duration = $('#duration').val(),
        var status = 'pending';

        $.ajax({
            type:'POST',
            url: 'http://localhost:3000/requests',
            data:{Name: name, Email: email, staffId: staffId, startDate: startDate, duration: duration, status: status},
            success: function(result){
                alert('New request sent!');
                location.reload();

            }
        })
    })
})

function load(){
    $.getJSON("db.json", function(json){
        employees = json.employees;
        container;
        populateTable(employees);
    })
}

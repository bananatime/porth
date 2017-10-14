
window.onload = function () {

document.write("Test Client calling porth REST API Gateway!" + "<br>" + "<br>");

// "testroute" is a valid route that the testing server is expecting
var url = document.URL + "testroute"; 

document.write("Calling a GET API." + "<br>");

// calling GET API
$.get(url, function(data) {
      document.write("Response received back is: " + data);
    });
};





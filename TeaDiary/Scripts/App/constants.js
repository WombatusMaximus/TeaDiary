var ApiCommands = new apiCommands();
var ApiQueries = new apiQueries();

var failureText = "Fail";
var successText = "Success";

var searchType = {
    Name: "name",
    Type: "type" 
};

var teaListTitle = $("<h2>").html("Your tea list:");
var noTeasTitle = $("<h2>").html("No teas were found :(");
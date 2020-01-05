const apiCommands = new ApiCommands();
const apiQueries = new ApiQueries();

const failureText = "Fail";
const successText = "Success";

const searchType = {
    Name: "name",
    Type: "type" 
};

const teaListTitle = $("<h2>").html("Your tea list:");
const noTeasTitle = $("<h2>").html("No teas were found :(");
var teaCommands;
var apiCommands;
var apiQueries;

const FAILURE_TEXT = "Fail";
const SUCCESS_TEXT = "Success";

const SEARCH_TYPE = {
    NAME: "name",
    TYPE: "type"
};

$(document).ready(() => {
    teaCommands = new TeaCommands();
    apiCommands = new ApiCommands();
    apiQueries = new ApiQueries();
})
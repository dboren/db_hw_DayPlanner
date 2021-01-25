var currDT = moment().format("MMM Do YY");

var entry9;
var entry10;
var entry11;



$("#currentDay").text(currDT);

function saveEntry9() {
    entry9 = $("#9AM-text").val();
    console.log("Entry 9: " + entry9);
    localStorage.setItem("9AM entry", entry9);

}

function saveEntry10() {
    entry10 = $("#10AM-text").val();
    console.log("Entry 10: " + entry10);
    localStorage.setItem("10AM entry", entry10);

}

function saveEntry11() {
    entry11 = $("#11AM-text").val();
    console.log("Entry 11: " + entry11);
    localStorage.setItem("11AM entry", entry11);

}

function renderEntry9() {
        priorEntry9 = localStorage.getItem("9AM entry");
        $("#9AM-text").text(priorEntry9);
        console.log("Stored entry 9: " + priorEntry9);
    
    }


function renderEntry11() {
    entry11 = localStorage.getItem("11AM entry");
    $("#11AM-text").text(entry11);

}

function init() {
    renderEntry9();
    // renderEntry10();
    renderEntry11();
}

init();

$("#sv9").click(saveEntry9);
$("#sv10").click(saveEntry10);
$("#sv11").click(saveEntry11);
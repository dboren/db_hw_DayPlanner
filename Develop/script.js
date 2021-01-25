var currDT = moment().format("MMM Do YY");

var entry;



$("#currentDay").text(currDT);

function saveEntry() {
    entry = $("#11AM-text").val();
    console.log(entry);
    localStorage.setItem("entry", entry);

}


function renderEntry() {
    entry = localStorage.getItem("entry")
    $("#11AM-text").text(entry);
}

function init() {
    renderEntry();
}

init();

$("#sv11").click(saveEntry);
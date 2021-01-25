var currDT = moment().format("MMM Do YY");



$("#currentDay").text(currDT);

function saveEntry() {
    var entry = $("#11AM-text").val();
    console.log(entry);
    localStorage.setItem("entry", entry);

}


function renderEntry {
}

$(".saveBtn").click(saveEntry);
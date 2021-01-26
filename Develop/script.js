var currDT = moment().format("MMM Do YY");

var entry9;
var entry10;
var entry11;
var entry12;
var entry1;
var entry2;
var entry3;
var entry4;
var entry5;

var cell9 = $("#9AM-text");
var cell10 = $("#10AM-text");
var cell11 = $("#11AM-text");
var cell12 = $("#12PM-text");
var cell1 = $("#1PM-text");
var cell2 = $("#2PM-text");
var cell3 = $("#3PM-text");
var cell4 = $("#4PM-text");
var cell5 = $("#5PM-text");

var JSDate = new Date();
// document.getElementById("9AM-text").innerHTML = currentHour.getHours();

console.log("Current hour: " + JSDate);

currentHour = JSDate.getHours();

console.log("Converted hour: " + currentHour);

console.log(typeof currentHour);

$("#currentDay").text(currDT);

// Save functions

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

function saveEntry12() {
    entry12 = $("#12PM-text").val();
    console.log("Entry 12: " + entry12);
    localStorage.setItem("12PM entry", entry12);

}

function saveEntry1() {
    entry1 = $("#1PM-text").val();
    console.log("Entry 1: " + entry1);
    localStorage.setItem("1PM entry", entry1);

}

function saveEntry2() {
    entry2 = $("#2PM-text").val();
    console.log("Entry 2: " + entry2);
    localStorage.setItem("2PM entry", entry2);

}

function saveEntry3() {
    entry3 = $("#3PM-text").val();
    console.log("Entry 3: " + entry3);
    localStorage.setItem("3PM entry", entry3);

}

function saveEntry4() {
    entry4 = $("#4PM-text").val();
    console.log("Entry 4: " + entry4);
    localStorage.setItem("4PM entry", entry4);

}

function saveEntry5() {
    entry5 = $("#5PM-text").val();
    console.log("Entry 5: " + entry5);
    localStorage.setItem("5PM entry", entry5);

}



// Load functions

function renderEntry9() {
        priorEntry9 = localStorage.getItem("9AM entry");
        $("#9AM-text").text(priorEntry9);
        console.log("Stored entry 9: " + priorEntry9);
    
    }

function renderEntry10() {
        priorEntry10 = localStorage.getItem("10AM entry");
        $("#10AM-text").text(priorEntry10);
        console.log("Stored entry 10: " + priorEntry10);
    
}

function renderEntry11() {
    priorEntry11 = localStorage.getItem("11AM entry");
    $("#11AM-text").text(priorEntry11);
    console.log("Stored entry 11: " + priorEntry11);

}

function renderEntry12() {
    priorEntry12 = localStorage.getItem("12PM entry");
    $("#12PM-text").text(priorEntry12);
    console.log("Stored entry 12: " + priorEntry12);

}

function renderEntry1() {
    priorEntry1 = localStorage.getItem("1PM entry");
    $("#1PM-text").text(priorEntry1);
    console.log("Stored entry 1: " + priorEntry1);

}

function renderEntry2() {
    priorEntry2 = localStorage.getItem("2PM entry");
    $("#2PM-text").text(priorEntry2);
    console.log("Stored entry 2: " + priorEntry2);

}

function renderEntry3() {
    priorEntry3 = localStorage.getItem("3PM entry");
    $("#3PM-text").text(priorEntry3);
    console.log("Stored entry 3: " + priorEntry3);

}


function renderEntry4() {
    priorEntry4 = localStorage.getItem("4PM entry");
    $("#4PM-text").text(priorEntry4);
    console.log("Stored entry 4: " + priorEntry4);

}

function renderEntry5() {
    priorEntry5 = localStorage.getItem("5PM entry");
    $("#5PM-text").text(priorEntry5);
    console.log("Stored entry 5: " + priorEntry5);

}

// Color change function

function setColor(cell) {
    if (cell.data-time.value == currentHour) {
        cell10.setAttribute("class", ".present")
    } else if (cell.data-time.value < currentHour) {
        cell10.setAttribute("class", ".future");
    } else if (cell.data-time.value > currentHour) {
        cell10.setAttribute("class", ".past");
    }
};


function init() {
    renderEntry9();
    renderEntry10();
    renderEntry11();
    renderEntry12();
    renderEntry1();
    renderEntry2();
    renderEntry3();
    renderEntry4();
    renderEntry5();

    setColor(cell10);
}

init();

$("#sv9").click(saveEntry9);
$("#sv10").click(saveEntry10);
$("#sv11").click(saveEntry11);
$("#sv12").click(saveEntry12);
$("#sv1").click(saveEntry1);
$("#sv2").click(saveEntry2);
$("#sv3").click(saveEntry3);
$("#sv4").click(saveEntry4);
$("#sv5").click(saveEntry5);
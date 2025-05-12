"use strict";

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter), 
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

// var frequency = 1e3, sequence = ["1000000","0100000","0010000","0001000","0000100","0000010","0000001"], elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;

var frequency = 1e3, sequence = ["1011111", "0000110", "1101101", "1100111", "0110110", "1110011", "1111011", "0000111", "1111111", "1110111"], elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;

window.onload = function() {
    stepSequence();
};
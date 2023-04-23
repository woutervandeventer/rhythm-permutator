"use strict";
const output = document.getElementById("bars");
const input = document.getElementById("len");
const button = document.getElementById("generateButton");
function permutate(notesPerBar) {
    const combinations = Math.pow(2, notesPerBar) - 1;
    const bars = Array(combinations);
    for (let i = 0; i < bars.length; i++) {
        bars[i] = Array(notesPerBar);
        // Binary representation of combination of notes in a bar
        const combination = i + 1;
        for (let j = 0; j < notesPerBar; j++) {
            if (((1 << j) & combination) !== 0) {
                bars[i][j] = true;
            }
            else {
                bars[i][j] = false;
            }
        }
    }
    return bars;
}
function clearList() {
    output.textContent = "";
}
function listPermutations(permutations) {
    const notesPerBar = permutations[0].length;
    const count = document.createElement("h2");
    count.innerText = `${permutations.length} permutations\n`;
    output.append(count);
    let str = "";
    for (let i = 0; i < permutations.length; i++) {
        for (let j = 0; j < notesPerBar; j++) {
            str += " ";
            str += permutations[i][j] ? "1" : "0";
        }
        str += "\n";
    }
    const outputStr = document.createElement("div");
    outputStr.innerText = str;
    output.append(outputStr);
}
function handleClick() {
    clearList();
    const notesPerBar = parseInt(input.value);
    const p = permutate(notesPerBar);
    listPermutations(p);
}
button.addEventListener("click", handleClick);

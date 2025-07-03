let saveEl = document.getElementById("save-el")
let count1 = document.getElementById("count")
let count2 = 0

function increment() {
    count2 += 1;
    count1.textContent = count2;
}

function save() {
    let countStr = count2 + " - "; 
    saveEl.textContent += countStr;
    count1.textContent = 0;
    count2 = 0;
}
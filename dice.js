let min;
let max;

document.getElementById("rolldice").addEventListener('click', function() {
    min = document.getElementById("minimumnum").value;
    if(min - Math.floor(min) < 0.5) {
        min = Math.floor(min);
    } else {
        min = Math.ceil(min);
    }
    max = document.getElementById("maximumnum").value;
    if(max - Math.floor(max) < 0.5) {
        max = Math.floor(max);
    } else {
        max = Math.ceil(max);
    }
    if (min < max) {
        var rollednum = getRandomInt(min, max);
        document.getElementById('rollnum').textContent = `You rolled a: ${rollednum}`;
    } else {
        alert("Your maximum number should be more than the minimum number.");
    }
})

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
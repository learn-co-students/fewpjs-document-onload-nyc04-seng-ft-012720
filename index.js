// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
    updateDOM();
})

function updateDOM() {
    const pText = document.querySelector("#text")
    pText.textContent = "This is really cool!"
}
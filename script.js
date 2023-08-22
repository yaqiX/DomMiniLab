const headingOne = document.querySelector("h1");
const hideButton = document.getElementById("hideButton");
const unhideButton = document.getElementById("unhideButton");

hideButton.addEventListener("click", () => {
    headingOne.style.display = "none";
});

unhideButton.addEventListener("click", () => {
    headingOne.style.display = "block";
});

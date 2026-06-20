// Wait for the HTML document to fully load
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Log a message to the browser developer console
    console.log("script.js is successfully connected!");

    // 2. Find the HTML heading element and change its text
    const heading = document.getElementById("main-heading");
    if (heading) {
        heading.innerText = "Text Changed by script.js!";
    }

    // 3. Find the button and add a click event listener
    const clickButton = document.getElementById("action-btn");
    if (clickButton) {
        clickButton.addEventListener("click", () => {
            alert("You clicked the button!");
        });
    }
});

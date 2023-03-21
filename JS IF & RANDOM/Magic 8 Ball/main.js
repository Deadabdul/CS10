document.getElementById("submit-button").addEventListener("click", btnClicked);

// Define possible responses
const responses = [
    "Without a doubt.",
    "As I see it, yes.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "Outlook not so good."
];

// Input
let input = document.getElementById("question");
let response = document.getElementById("response");

// Add event listener to button

function btnClicked()
{
    const question = input.value.trim();
    if (question === "") {
        response.textContent = "Please ask a question...";
    } else if (question.toLowerCase() === "does a magic 8 ball actually work?") {
        response.textContent = "How dare you doubt me!";
    } else if (question.toLowerCase() === "is javascript awesome?") {
        response.textContent = "Of course!";
    } else {
        const randomIndex = Math.floor(Math.random() * responses.length);
        response.textContent = responses[randomIndex];
    }
}
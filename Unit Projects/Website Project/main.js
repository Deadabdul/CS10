document.getElementById("submit-quiz").addEventListener("click", btnClicked)


function btnClicked() {
    //input
    let q1 = document.getElementById("q1").value.toLowerCase();
    let q1_feedback = document.getElementById("q1-feedback");
    let q2 = document.getElementById("q2").value.toLowerCase();
    let q2_feedback = document.getElementById("q2-feedback");
    let q3 = document.getElementById("q3").value.toLowerCase();
    let q3_feedback = document.getElementById("q3-feedback");
    let q4 = document.getElementById("q4").value.toLowerCase();
    let q4_feedback = document.getElementById("q4-feedback");
    let q5 = document.getElementById("q5").value.toLowerCase();
    let q5_feedback = document.getElementById("q5-feedback");
    //process
    let score = 0;
    let currentQuestion = 0;

    if(q1 === "game"){
        score++;
        q1_feedback.innerHTML = "Correct!"
        q1_feedback.style.color = "green"
    }else{
        q1_feedback.innerHTML = "Incorrect!"
        q1_feedback.style.color = "red"
    }

    if(q2 === "c#" || q2 === "c sharp" || q2 === "csharp"){
        score++;
        q2_feedback.innerHTML = "Correct!"
        q2_feedback.style.color = "green"
    }else{
        q2_feedback.innerHTML = "Incorrect!"
        q2_feedback.style.color = "red"
    }

    if(q3 === "2005"){
        score++;
        q3_feedback.innerHTML = "Correct!"
        q3_feedback.style.color = "green"
    }else{
        q3_feedback.innerHTML = "Incorrect!"
        q3_feedback.style.color = "red"
    }

    if(q4 === "serialized" || q4 === "serialize"){
        score++;
        q4_feedback.innerHTML = "Correct!"
        q4_feedback.style.color = "green"
    }else{
        q4_feedback.innerHTML = "Incorrect!"
        q4_feedback.style.color = "red"
    }

    if(q5 === "25" || q5 === "25+"){
        score++;
        q5_feedback.innerHTML = "Correct!"
        q5_feedback.style.color = "green"
    }else{
        q5_feedback.innerHTML = "Incorrect!"
        q5_feedback.style.color = "red"
    }

    // output
    let percentageScore = Math.round((score / 5) * 100);
    let output = `${score}/${5} (${percentageScore}`
    document.getElementById("output").innerHTML = `You got ${score}/${5} (${percentageScore}%)`;


}
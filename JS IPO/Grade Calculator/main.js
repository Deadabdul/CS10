document.getElementById("btn").addEventListener("click", btnClicked)


function btnClicked() {
    //input
    let in1 =+ document.getElementById("in-1").value;
    let in2 =+ document.getElementById("in-2").value;
    let in3 =+ document.getElementById("in-3").value;
    let in4 =+ document.getElementById("in-4").value;
    let in5 =+ document.getElementById("in-5").value;


    let average = (in1 + in2 + in3 + in4 + in5)/5;

    output.innerHTML = Math.round(average);



}
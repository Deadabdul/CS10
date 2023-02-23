document.getElementById("btn").addEventListener("click", btnClicked)


function btnClicked() {
    //input
    let input = document.getElementById("input").value;
    //process
    let output = document.getElementById("output").value;

    if(input = "html") { output.innerHTML = "Hypertext Markup Language" }
    if(input = "http") { output.innerHTML = "Hypertext Transfer Protocol"}
    if(input = "php") { output.innerHTML = "Hypertext Preprocessor" }
    if(input = "https") { output.innerHTML = "Hypertext Transfer Protocol Secure" }
    if(input = "sql") { output.innerHTML = "Structured Query Language" }
    if(input = "xhtml") { output.innerHTML = "EXtensible HyperText Markup Language" }
    //output
    output.innerHTML = processed;



}
document.getElementById("btn").addEventListener("click", btnClicked)


function btnClicked() {
    //input
    let input = document.getElementById("input").value;
    //process
    let output = "";

    if(input === "html") { output = "Hypertext Markup Language" }
    if(input === "http") { output = "Hypertext Transfer Protocol"}
    if(input === "php") { output = "Hypertext Preprocessor" }
    if(input === "https") { output = "Hypertext Transfer Protocol Secure" }
    if(input === "sql") { output = "Structured Query Language" }
    if(input === "xhtml") { output = "Extensible HyperText Markup Language" }
    // output
    document.getElementById("output").innerHTML = output;


}
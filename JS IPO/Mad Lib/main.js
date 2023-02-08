
document.getElementById("btn").addEventListener("click", CreateMadlib);



function CreateMadlib() {
    // INPUT
    let place = document.getElementById("place").value;
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let verb = document.getElementById("verb").value;
    let noun = document.getElementById("noun").value;

    //PROCESS
    let msg = `While in ${place}, ${name1} and ${name2} had a ${verb}
    compotition, the looser had to had to do what ever the winnder
    chose, when ${name1} lost, ${name2}  made him eat a ${noun}.`;

    
    //OUTPUT
    document.getElementById("output").innerHTML = msg;
}
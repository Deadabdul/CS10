
document.getElementById("btn").addEventListener("click", getOrder);



function getOrder() {
    // INPUT
    let size = document.getElementById("size").value;
    let topping1 = document.getElementById("topping1").value;
    let topping2 = document.getElementById("topping2").value;

    //PROCESS
    let msg = "your " + size + " pizza with " + topping1 + " and " + topping2 +
    " will be ready soon!";
    
    //OUTPUT
    document.getElementById("output").innerHTML = (msg);
}
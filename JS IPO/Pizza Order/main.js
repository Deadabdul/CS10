
document.getElementById("btn").addEventListener("click", getOrder);



function getOrder() {
    // INPUT
    let size = prompt("Enter the size of pizza (small, medium, large): ");
    let topping1 = prompt("Enter first topping: ");
    let topping2 = prompt("Enter second topping: ");

    //PROCESS
    let msg = "your" + size + "pizza with " + topping1 + " and " + topping2 +
    "will be ready soon!";
    
    //OUTPUT
    alert(msg);
}

document.getElementById("btn").addEventListener("click", btnClicked)



function btnClicked() {
    // INPUT
    let number = +document.getElementById("place").value

    // PROCESS AND OUTPUT
    let sign = document.getElementById("sign")
    let evenOrOdd = document.getElementById("evenOrOdd")

    if(number % 2 === 0)
        evenOrOdd.innerHTML = "even"
    else
        evenOrOdd.innerHTML = "odd"

    if(number > 0)
        sign.innerHTML = "Positive"
    else if(number < 0)
        sign.innerHTML = "Negative"
    else
        sign.innerHTML = "Zero"
}
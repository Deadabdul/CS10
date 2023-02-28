
document.getElementById("btn").addEventListener("click", btnClicked)



function btnClicked() {
    // INPUT
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    // PROCESS AND OUTPUT
    let output = document.getElementById("output")
    if (username === 'admin' && password === '1234')
        output.innerHTML = "Login Successful"
    else if (username !== 'admin')
        output.innerHTML = "Invalid Username"
    else
        output.innerHTML = "Invalid Password"

}
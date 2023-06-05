let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let player = {
    x: 300,
    y: 275,
    w: 50,
    h: 50,
    speed: 10
}

let rightPressed = false;
let leftPressed = false;
let downPressed = false;
let upPressed = false;



requestAnimationFrame(draw);
function draw() {

    if(rightPressed) {
        player.x += player.speed;

    }
    if(leftPressed) {
        player.x -= player.speed;

    }

    if(downPressed) {
        player.y += player.speed;

    }
    if(upPressed) {
        player.y -= player.speed;

    }


    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.w, player.h);
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);



function keydownHandler(event)
{
    if(event.repeat) return

    if(event.code === "ArrowRight")
    {
        rightPressed = true
    }
    if(event.code === "ArrowLeft" )
    {
        leftPressed = true

    }
    if(event.code === "ArrowUp" )
    {
        upPressed = true;

    }

    if(event.code === "ArrowDown" )
    {
        downPressed = true;

    }
}
function keyupHandler(event)
{

    if(event.code === "ArrowRight")
    {
        rightPressed = false
    }
    if(event.code === "ArrowLeft")
    {
        leftPressed = false;
    }
    if(event.code === "ArrowUp")
    {
        upPressed = false;
    }

    if(event.code === "ArrowDown")
    {
        downPressed = false;
    }
}

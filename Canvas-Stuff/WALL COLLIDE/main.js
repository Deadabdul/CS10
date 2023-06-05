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

let square = {
    x: 475,
    y: 225,
    w: 25,
    h: 150
}

let rightPressed = false;
let leftPressed = false;
let downPressed = false;
let upPressed = false;



requestAnimationFrame(draw);
function draw() {

    if(rightPressed) {
        player.x += player.speed;
        if(player.y < square.y + square.h && player.y + player.h > square.y  ) {
            if (player.x + player.w > square.x  && player.x + player.w < square.x + square.w)
                player.x = square.x - player.w;
        }
    }
    if(leftPressed) {
        player.x -= player.speed;
        if(player.y < square.y + square.h && player.y > square.y - player.h ) {
            if (player.x < square.x + square.w && player.x > square.x)
                player.x = square.x + square.w;

        }
    }

    if(downPressed) {
        player.y += player.speed;
        if (player.x < square.x + square.w && player.x + player.w > square.x) {
            if (player.y + player.h > square.y && player.y + player.h < square.y + square.h)
                player.y = square.y - player.w;
        }
    }
    if(upPressed) {
        player.y -= player.speed;
        if (player.x < square.x + square.w && player.x + player.w > square.x) {
            if (player.y < square.y + square.h && player.y > square.y)
                player.y = square.y + square.h;
        }
    }


    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.fillStyle = "grey";
    ctx.fillRect(square.x, square.y, square.w, square.h);
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

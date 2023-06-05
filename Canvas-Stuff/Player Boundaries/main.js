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
let player2 = {
    x: 425,
    y: 275,
    w: 50,
    h: 50,
    speed: 500
}

let arrowRightPressed = false;
let arrowLeftPressed = false;
let arrowDownPressed = false;
let arrowUpPressed = false;

let dPressed = false;
let aPressed = false;
let sPressed = false;
let wPressed = false;



requestAnimationFrame(draw);
function draw() {

    if(arrowRightPressed) {
        player.x += player.speed;
        if(player.x > cnv.width - player.w)
            player.x = cnv.width - player.w;
    }
    if(arrowLeftPressed) {
        player.x -= player.speed;
        if (player.x < 0)
            player.x = 0;
    }

    if(arrowDownPressed) {
        player.y += player.speed;
        if (player.y > cnv.height - player.h)
            player.y = cnv.height - player.h;
    }
    if(arrowUpPressed) {
        player.y -= player.speed;
        if(player.y < 0)
            player.y = 0;
    }


    if(dPressed) {
        player2.x += player2.speed;
        if(player2.x > cnv.width + player2.w)
            player2.x = 0 - player2.w;
    }
    if(aPressed) {
        player2.x -= player2.speed;
        if (player2.x < 0 - player2.w)
            player2.x = cnv.width + player2.w;
    }

    if(sPressed) {
        player2.y += player2.speed;
        if (player2.y > cnv.height + player2.h)
            player2.y = 0 - player2.h;
    }
    if(wPressed) {
        player2.y -= player2.speed;
        if(player2.y < 0 - player2.h)
            player2.y = cnv.height + player2.h;
    }




    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.fillStyle = "green";
    ctx.fillRect(player2.x, player2.y, player2.w, player2.h);
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);



function keydownHandler(event)
{
    if(event.repeat) return

    if(event.code === "ArrowRight")
    {
        arrowRightPressed = true
    }
    if(event.code === "ArrowLeft" )
    {
        arrowLeftPressed = true

    }
    if(event.code === "ArrowUp" )
    {
        arrowUpPressed = true;

    }

    if(event.code === "ArrowDown" )
    {
        arrowDownPressed = true;

    }



    if(event.code === "KeyD")
    {
        dPressed = true
    }
    if(event.code === "KeyA" )
    {
        aPressed = true

    }
    if(event.code === "KeyW" )
    {
        wPressed = true;

    }

    if(event.code === "KeyS" )
    {
        sPressed = true;

    }
}
function keyupHandler(event)
{

    if(event.code === "ArrowRight")
    {
        arrowRightPressed = false
    }
    if(event.code === "ArrowLeft")
    {
        arrowLeftPressed = false;
    }
    if(event.code === "ArrowUp")
    {
        arrowUpPressed = false;
    }

    if(event.code === "ArrowDown")
    {
        arrowDownPressed = false;
    }

    if(event.code === "KeyD")
    {
        dPressed = false
    }
    if(event.code === "KeyA" )
    {
        aPressed = false

    }
    if(event.code === "KeyW" )
    {
        wPressed = false;

    }

    if(event.code === "KeyS" )
    {
        sPressed = false;

    }
}

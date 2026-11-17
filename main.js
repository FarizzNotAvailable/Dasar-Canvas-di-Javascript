import DrawStraightLine from "./Render/StraightLine.js"

let screen
let ctx

window.onload = function () {
    screen = document.getElementById('screen')
    screen.width = window.innerWidth
    screen.height = window.innerHeight
    ctx = screen.getContext('2d');
    start()
    update()
}

function start() {

}

function update() {
    ctx.fillStyle = 'cornflowerblue'
    ctx.fillRect(0, 0, screen.width, screen.height)
    requestAnimationFrame(update)

    DrawStraightLine(ctx, { x: 0, y: 0 }, { x: 1000, y: 500 })
}
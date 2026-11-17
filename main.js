import renderImage from "./Render/Image.js"
import DrawStraightLine from "./Render/StraightLine.js"
import renderText from "./Render/Text.js"

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
    requestAnimationFrame(update)

    ctx.fillStyle = 'cornflowerblue'
    ctx.fillRect(0, 0, screen.width, screen.height)

    DrawStraightLine(ctx, { x: 0, y: 0 }, { x: 1000, y: 500 })

    renderImage(ctx, './Assets/bobby.jpg', 500, 100, 64, 64)

    renderText(ctx, 'AKU BOBBY AKU TAHU BOLA', { x: 532, y: 200 }, 1000, 'white', 'Bold 32px Arial', 'center', 'middle')
}
export default function DrawStraightLine(ctx, from, to, color = 'black', width = 1) {

    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.moveTo(from.x, from.y)
    ctx.lineTo(to.x, to.y)
    ctx.stroke()
}
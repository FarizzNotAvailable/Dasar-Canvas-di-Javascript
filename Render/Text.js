export default function renderText(ctx, text, coordinates, maxWidth, color, font, align, baseline) {
    ctx.font = font
    ctx.textAlign = align
    ctx.textBaseline = baseline
    ctx.fillStyle = color
    ctx.fillText(text, coordinates.x, coordinates.y, maxWidth)
}
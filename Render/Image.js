export default function renderImage(ctx, urlImage, x, y, width, height) {

    const image = new Image(); image.src = urlImage

    ctx.drawImage(image, x, y, width, height)
}
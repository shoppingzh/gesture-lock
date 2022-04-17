/**
 * 绘制圆
 * @param ctx 
 * @param x 
 * @param y 
 * @param radius 
 */
export function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI)
  ctx.stroke()
}

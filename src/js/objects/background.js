const background = {
  position: {
    x: 0, y: 0
  },
  size: {
    width: canvas.width,
    height: canvas.height
  },
  color: "black",
  draw: function() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
  }
}
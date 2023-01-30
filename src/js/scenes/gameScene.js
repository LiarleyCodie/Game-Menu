function createGameScene() {
  const gameScene = {
    draw: function() {
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      title.instance.position.y = canvas.height / 2 - title.instance.size.height / 2
      title.draw()
    }
  }
  return gameScene
}
// THIS IS THE MAIN UPDATE FUNCTION!
function update() {
  background.draw()

  game.loop = requestAnimationFrame(update)
}
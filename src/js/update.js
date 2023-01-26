// THIS IS THE MAIN UPDATE FUNCTION!
function update() {
  background.draw()
  menu.draw()

  game.loop = requestAnimationFrame(update)
}
// THIS IS THE MAIN UPDATE FUNCTION!
var currentScene = createMenuScene()

function update() {
  if (currentScene.draw) currentScene.draw()
  if (currentScene.update) currentScene.update()
}
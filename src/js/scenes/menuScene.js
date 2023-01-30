function createMenuScene() {
  const menuScene = {
    draw: function () {
      background.draw()
      title.draw()
      menu.draw()
    },
    update: function () {
      background.update()
      menu.update()
    }
  }
  return menuScene
}
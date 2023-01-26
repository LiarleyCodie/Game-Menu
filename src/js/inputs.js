let holdIndicator = false
window.addEventListener("keydown", ({ key, keyCode }) => {
  if (game.running) {
    if (!holdIndicator) {
      holdIndicator = true
      switch (key) {
        case "ArrowUp":
          if (menu.indicatorPosition === 0) {
            menu.indicatorPosition = menu.options.length - 1
          } else {
            menu.indicatorPosition -= 1
          }
          break
        case "ArrowDown":
          if (menu.indicatorPosition === menu.options.length - 1) {
            menu.indicatorPosition = 0
          } else {
            menu.indicatorPosition += 1
          }
          break
      }
      if (keyCode === 32 || keyCode === 13) {
        if (menu.options[menu.indicatorPosition].action) menu.options[menu.indicatorPosition].action()

      }
    }
  }
})

window.addEventListener("keyup", ({ key }) => {
  if (holdIndicator) holdIndicator = false
}
)

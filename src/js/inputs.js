let holdIndicator = false
window.addEventListener("keydown", ({ key }) => {
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
  }
})

window.addEventListener("keyup", ({ key }) => {
  if (holdIndicator) holdIndicator = false
}
)

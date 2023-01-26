const game = {
  canvas: document.querySelector("#canvas"),
  ctx: this.canvas.getContext("2d"),
  running: false,
  loop: undefined,
  initialize: function (width, height) {
    this.canvas.width = width
    this.canvas.height = height
    this.ctx.imageSmoothingEnabled = false
  },
  fluxcontrol: function (runEl, stopEl, create, update) {
    if (runEl && stopEl) {
      runEl.onclick = () => {
        if (!this.running) {
          if (create) {
            create()
          } else {
            console.log("main `create()` function don't exists!")
          }
          if (update) {
            update()
            this.running = true
            console.log("[RUNNING!]")
          } else {
            console.log("main `update()` function don't exists!")
          }
        }
      }
      stopEl.onclick = () => {
        if (this.running) {
          if (this.loop) {
            window.cancelAnimationFrame(this.loop)
            this.running = false
            console.log("[STOPPED!]")
          }
        } else {
          console.log("You cannot use the `fluxcontrol()` method before declare the `run` and `stop` elements!")
          console.log("Declare then as HTML elements using: `run` for the run button element and `stop` for the stop button element.")
        }
      }
    }
  }
}
const ctx = game.ctx
const runEl = document.querySelector("#run")
const stopEl = document.querySelector("#stop")

game.initialize(520, 448)
game.fluxcontrol(runEl, stopEl, create, update)
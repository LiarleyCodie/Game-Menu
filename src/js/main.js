const game = {
  canvas: document.querySelector("#canvas"),
  ctx: this.canvas.getContext("2d"),
  running: false,
  currentFrame: 0,
  initialize: function (width, height, bilinearFilter = false) {
    this.canvas.width = width
    this.canvas.height = height
    this.ctx.imageSmoothingEnabled = bilinearFilter
    if (!bilinearFilter) this.canvas.style.imageRendering = "pixelated"

  },
  fluxcontrol: function (runEl, stopEl) {
    runEl.onclick = () => {
      if (!this.running) {
        create()
        loop()
        this.running = true
        console.log("[RUNNING]")
      }
    }
    stopEl.onclick = () => {
      if (this.running) {
        cancelAnimationFrame(interval)
        this.running = false
        console.log("[STOPPED]")
      }
    }
  }
}
const ctx = game.ctx
const runEl = document.querySelector("#run")
const stopEl = document.querySelector("#stop")

game.initialize(512, 442, false)
game.fluxcontrol(runEl, stopEl)

const FPS = 30
var timestamp = Date.now()
var interval = null
function loop() {
  interval = requestAnimationFrame(loop)
  const now = Date.now()
  const delta = now - timestamp
  if (delta < 1000 / FPS) {
    return
  }
  timestamp = now
  update()
}
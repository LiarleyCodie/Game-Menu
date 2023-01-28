const menu = {
  position: {
    x: 100, y: 130
  },
  fontSize: 24,
  fontFamily: "monospace",
  lineHeight: 5,
  indicatorPosition: 0,
  options: [
    {
      y: undefined,
      title: "START",
      action: function () {
        alert("[Start] Let's start the game")
      }
    },
    {
      y: undefined,
      title: "LOAD",
      action: function () {
        alert("[Load] Okay, we'll begin from a before moment")
      }
    },
    {
      y: undefined,
      title: "OPTIONS",
      action: function () {
        alert("[Options] What you wanna change?")
      }
    },
    {
      y: undefined,
      title: "QUIT",
      action: function () {
        alert("[Quit] Astalavista Baby!")
      }
    },
  ],
  draw: function () {
    for (let i = 0; i < this.options.length; i++) {
      this.options[i].y = this.position.y + (this.fontSize * (i + 1) + (this.lineHeight * i + 1))

      ctx.fillStyle = "white"
      ctx.font = `${this.fontSize}px ${this.fontFamily}`
      ctx.fillText(
        this.options[i].title,
        this.position.x, this.options[i].y
      )
    }
  },
  update: function () {
    menuIndicator.draw()
    menuIndicator.update(this.position.x - 32, this.options[this.indicatorPosition].y - 16)
  }
}
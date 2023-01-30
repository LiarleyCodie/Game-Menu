const menu = {
    position: {
      x: 100, y: 160
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
          currentScene = createGameScene()
        }
      },
      {
        y: undefined,
        title: "LOAD",
        action: function () {
          currentScene = createGameScene()
        }
      },
      {
        y: undefined,
        title: "OPTIONS",
        action: function () {
          currentScene = createGameScene()
        }
      },
      {
        y: undefined,
        title: "QUIT",
        action: function () {
          currentScene = createGameScene()
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
      menuIndicator.update(this.position.x - 32, this.options[this.indicatorPosition].y - 16)
      menuIndicator.draw()
    }
}
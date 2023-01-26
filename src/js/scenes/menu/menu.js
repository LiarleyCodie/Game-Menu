const menu = {
  position: {
    x: 100, y: 130
  },
  fontSize: 24,
  fontFamily: "open sans condensed",
  lineHeight: 5,
  indicatorPosition: 0,
  options: [
    { id: 0, y: 0, title: "START" },
    { id: 1, y: 0, title: "LOAD" },
    { id: 2, y: 0, title: "OPTIONS" },
    { id: 3, y: 0, title: "QUIT" },
  ],
  draw: function() {
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
  update: function() {
    menuIndicator.draw()
    menuIndicator.update(this.position.x - 32, this.options[this.indicatorPosition].y - 16)
  }
}
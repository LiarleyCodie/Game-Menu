const menu = {
  position: {
    x: 36, y: 36
  },
  fontSize: 24,
  options: [
    { title: "START" },
    { title: "LOAD" },
    { title: "OPTIONS" },
    { title: "QUIT" },
  ],
  draw: function() {
    for (let i = 0; i < this.options.length; i++) {
      ctx.fillStyle = "white"
      ctx.font = `${this.fontSize}px monospace`
      ctx.fillText(
        this.options[i].title, 
        this.position.x,
        this.position.y + (this.fontSize * (i + 1)))
    }
  }
}
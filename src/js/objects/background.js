const background = {
  instance: {
    position: { x: 0, y: 0 },
    size: { width: 512, height: 448 }
  },
  sprite: {
    clipPosition: { x: 0, y: 0 },
    clipSize: { width: 512, height: 442 }
  },
  speed: 1,
  draw: function() {
    // background image
    ctx.drawImage(
      backgroundSprite,
      this.sprite.clipPosition.x, this.sprite.clipPosition.y,
      this.sprite.clipSize.width, this.sprite.clipSize.height,
      this.instance.position.x,this.instance.position.y,
      this.instance.size.width, this.instance.size.height,
    )

    ctx.drawImage(
      backgroundSprite,
      this.sprite.clipPosition.x, this.sprite.clipPosition.y,
      this.sprite.clipSize.width, this.sprite.clipSize.height,
      this.instance.position.x + this.instance.size.width,this.instance.position.y,
      this.instance.size.width, this.instance.size.height,
    )

    // background overlay
    ctx.fillStyle = "rgba(0,0,0,0.5)"
    ctx.fillRect(0, 0, this.instance.size.width, this.instance.size.height)
  },
  update: function() {
    this.instance.position.x -= this.speed
    if ((this.instance.position.x + this.instance.size.width) * 2 <= canvas.width) {
      this.instance.position.x = 0
    }
  }
}
const menuIndicator = {
  instance: {
    position: {
      x: 0, y: 0
    },
    size: { 
      width: 16, height: 16
    },
  },
  sprite: {
    clipPosition: {
      x: 0, y: 0
    },
    clipSize: {
      width: 16, height: 16
    }
  },
  draw: function() {
    ctx.drawImage(
      indicatorSprite,
      this.sprite.clipPosition.x, this.sprite.clipPosition.y,
      this.sprite.clipSize.width, this.sprite.clipSize.height,
      this.instance.position.x, this.instance.position.y,
      this.instance.size.width, this.instance.size.height
    )
  },
  update: function(x, y) {
    this.instance.position.x = x
    this.instance.position.y = y
  }
} 
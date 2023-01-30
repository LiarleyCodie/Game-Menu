const title = {
  instance: {
    position: {
      x: canvas.width / 2 - 285 / 2, y: 50
    },
    size: { 
      width: 285, height: 49
    },
  },
  sprite: {
    clipPosition: {
      x: 0, y: 0
    },
    clipSize: {
      width: 285, height: 49
    }
  },
  draw: function() {
    ctx.drawImage(
      gameTitleSprite,
      this.sprite.clipPosition.x, this.sprite.clipPosition.y,
      this.sprite.clipSize.width, this.sprite.clipSize.height,
      this.instance.position.x, this.instance.position.y,
      this.instance.size.width, this.instance.size.height
    )
  }
} 
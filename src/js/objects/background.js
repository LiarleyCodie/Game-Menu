const background = {
  instance: {
    position: {
      x: 0, 
      y: 0
    },
    size: {
      width: canvas.width,
      height: canvas.height
    },
  },
  sprite: {
    clipPosition: {
      x: 0, 
      y: 0
    },
    clipSize: {
      width: 16,
      height: 16
    }
  },
  draw: function () {
    // a fórmula que define a quantidade de tiles necessários na horizontal é
    // Math.floor((canvas.width / 16) + 1) = 33 tiles
    // a fórmula que define a quantidade de tiles necessários na vertical é
    // Math.floor(canvas.height / 16) = 28 tiles

    for (let i = 0; i < 28; i++) {
      // const tileX = this.instance.position.x + (this.sprite.clipSize.width * i)
      const tileY = this.instance.position.y + (this.sprite.clipSize.height * i)
      ctx.drawImage(
        backgroundTileSprite,
        this.sprite.clipPosition.x, this.sprite.clipPosition.y,
        this.sprite.clipSize.width, this.sprite.clipSize.height,
        this.instance.position.x, tileY,
        this.sprite.clipSize.width, this.sprite.clipSize.height,
      )
    }
    
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
}
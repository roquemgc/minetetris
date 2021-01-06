class Piece {
  constructor(ctx) {
    this.ctx = ctx;
    this.spawn();
  }

  spawn() {
    this.typeId = this.randomizeTetrominoType(COLORS.length - 1);
    this.shape = SHAPES[this.typeId];
    this.blockImg = BLOCK_IMG[this.typeId];
    this.x = 0;
    this.y = 0;
    this.hardDropped = false;
  }

  draw() {
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.drawImage(this.blockImg, this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  move(p) {
    if (!this.hardDropped) {
      this.x = p.x;
      this.y = p.y;
    }
    this.shape = p.shape;
  }

  hardDrop() {
    this.hardDropped = true;
  }

  setStartingPosition() {
    // A reta será gerada no meio e o resto aleatóriamente
    this.x = this.typeId === 1 ? board.cols / 2 : Math.floor(Math.random() * board.cols / 2) + 1;
  }

  randomizeTetrominoType(noOfTypes) {
    return Math.floor(Math.random() * noOfTypes + 1);
  }
}

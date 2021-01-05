'use strict';

const BOARD_DIMENSION = {
  'small': {
    COLS: 10, 
    ROWS: 20
  },
  'big': {
    COLS: 22, 
    ROWS: 44
  }
}
const BLOCK_SIZE = 30;
const POINTS_PER_LEVEL = 300;
const NO_OF_HIGH_SCORES = 10;
const COLORS = [
  'none',
  'black',
  'blue',
  'brown',
  'cyan',
  'green',
  'yellow',
  'special',
];

const BLOCK_IMG = [];
BLOCK_IMG.push('none');
for(let i = 1; i < COLORS.length; i++) {
  let img = document.createElement("IMG");
  img.setAttribute("src", COLORS[i] != 'special' ? `../lib/img/block_${COLORS[i]}.png` : '../lib/img/block_special.gif');
  BLOCK_IMG.push(img);
}

const SHAPES = [
  [],
  [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], // Reta
  [[2, 2], [2, 2]], // Quadrado 2x2
  [[0, 3, 0], [0, 3, 0], [0, 3, 3]], // L
  [[4, 4, 0], [0, 4, 0], [0, 4, 0]], // L invertido
  [[0, 0, 0], [0, 5, 0], [5, 5, 5]], // Triângulo
  [[0, 0, 0], [6, 0, 6], [6, 6, 6]], // Barco
  [[7]], // Especial
];

const KEY = {
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  P: 80,
  Q: 81
};

const POINTS = {
  SINGLE: 10,
  DOUBLE: 40,
  TRIPLE: 90,
  TETRIS: 120,
};

const LEVEL = {
  1: 800,
  2: 720,
  3: 630,
  4: 550,
  5: 470,
  6: 380,
  7: 300,
  8: 220,
  9: 130,
  10: 100,
  11: 80,
  12: 80,
  13: 80,
  14: 70,
  15: 70,
  16: 70,
  17: 50,
  18: 50,
  19: 50,
  20: 30,
  21: 30,
  // 29+ = 20ms
};

const ROTATION = {
  LEFT: 'left',
  RIGHT: 'right'
};

[COLORS, SHAPES, KEY, POINTS, LEVEL, ROTATION].forEach(item => Object.freeze(item));

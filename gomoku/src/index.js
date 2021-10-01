
var canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d'); // get cnavas
var chesscolor = ['#000', '#fff'] // define black/white pawn
var step = 0 // steps
var maparr = [] // status of canvas/board
var mode = [
  // check mode
  [1, 0], // horiz
  [0, 1], // vertical
  [1, 1], // right bot, left top
  [1, -1], // right top, left bot
]

// record board
for (var i = 0; i < 14; i++) {
  maparr[i] = []
  for (var j = 0; j < 14; j++) {
    maparr[i][j] = 0
  }
}

// board
for (i = 1; i < 15; i++) {
  //loop for 15 lines
  // |
  ctx.moveTo(30 * i, 30)
  ctx.lineTo(30 * 1, 420)
  // ___
  ctx.moveTo(30, 30 * i)
  ctx.lineTo(420, 30 * i)
}

ctx.stroke() // edge

// pawn
function drawchess(x, y, color) {
  // darw one pawn
  AudioContext.fillStyle = color
  AudioContext.beginPath()
  AudioContext.arc(x, y, 15, 0, Math.PI * 2, false) // shape
  AudioContext.fill() // fill color
  AudioContext.stroke()
}

canvas.addEventListener('click', function (e) {
  var px = Math.floor((e.offsetX + 15) / 30) - 1
  var py = Math.floor((e.offsetY + 15) / 30) - 1
  if (
    (px + 1) * 30 === 0 ||
    ((py + 1) * 30 === 0) | ((px + 1) * 30 === 450) ||
    (py + 1) * 30 === 450
  ) {
    return
  }
  if (maparr[px][py] === 0) {
    drawchess((px + 1) * 30, (py + 1) * 30, chesscolor[step % 2])
    maparr[px][py] = chesscolor[step % 2]
    checkwin(px, py, chesscolor[step % 2], mode[0])
    checkwin(px, py, chesscolor[step % 2], mode[1])
    checkwin(px, py, chesscolor[step % 2], mode[2])
    checkwin(px, py, chesscolor[step % 2], mode[3])
    step++
  }
})

function checkwin(x, y, color, mode) {
  // right
  var ct = 0
  for (i = 1; i < 5; i++) {
    if (maparr[x + i * mode[0]]) {
      if (maparr[x + i * mode[0]][y + i * mode[1]] === color) {
        ct++
      } else {
        break
      }
    }
  }
  for (i = 1; i < 5; i++) {
    //left
    if (maparr[x - i * mode[0]]) {
      if (maparr[x - i * mode[0]][y - i * mode[1]] === color) {
        ct++
      } else {
        break
      }
    }
  }

  if (ct >= 4) {
    alert(color)
  }
}


const arr = new Array(7)
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(7).fill(0)
}
arr[0][2] = 1
arr[0][3] = 1
arr[1][3] = 1
arr[2][4] = 1
arr[3][3] = 1
arr[3][4] = 1
arr[4][0] = 1
arr[4][4] = 1
arr[5][0] = 1
arr[5][1] = 1
arr[5][2] = 1
arr[6][0] = 1
arr[6][1] = 1
arr[6][2] = 1
const preArr = new Array(7)
for (let i = 0; i < arr.length; i++) {
  preArr[i] = new Array(7)
}

const bfs = () => {
  let start = {
    x: 2,
    y: 1
  }
  arr[2][1] = 1
  let end = {
    x: 3,
    y: 5
  }
  let queue = []
  queue.push(start)
  while (queue.length) {
    let e = queue.shift()
    if (e.x === end.x && e.y === end.y) {
      break
    }
    if (e.x && arr[e.x - 1][e.y] === 0) {
      queue.push({
        x: e.x - 1,
        y: e.y
      })
      preArr[e.x - 1][e.y] = e
      arr[e.x - 1][e.y] = -1
    }
    if (e.y && arr[e.x][e.y - 1] === 0) {
      queue.push({
        x: e.x,
        y: e.y - 1
      })
      preArr[e.x][e.y - 1] = e
      arr[e.x][e.y - 1] = -1
    }
    if (e.x !== 6 && arr[e.x + 1][e.y] === 0) {
      queue.push({
        x: e.x + 1,
        y: e.y
      })
      preArr[e.x + 1][e.y] = e
      arr[e.x + 1][e.y] = -1
    }
    if (e.y !== 6 && arr[e.x][e.y + 1] === 0) {
      queue.push({
        x: e.x,
        y: e.y + 1
      })
      preArr[e.x][e.y + 1] = e
      arr[e.x][e.y + 1] = -1
    }
  }
}
bfs()
let row = 3
let col = 5
const res = []
res.push({ x: 3, y: 5 })
while (!(row === 2 && col === 1)) {
  const e = preArr[row][col]
  res.unshift(e)
  row = e.x
  col = e.y
}
console.log(res)

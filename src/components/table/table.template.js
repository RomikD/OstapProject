const CODES = {
  A: 65,
  Z: 90,
}

function toCell() {
  return `<div class="cell" contenteditable></div>`
}

function toColumn(letter) {
  return `<div class="column">${letter}</div>`
}

function toRow(content, info) {
  return `<div class="row">
            <div class="row-info">${info || ''}</div>
            <div class="row-data">${content}</div>
          </div>`
}

function getLetters() {
  const letters = []
  for (let i = CODES.A; i <= CODES.Z; i++) {
    letters.push(String.fromCharCode(i))
  }
  return letters
}

export function createTable(rowsCount = 15) {
  const letters = getLetters()
  const columns = letters.map(toColumn).join('')

  const cells = new Array(letters.length)
      .fill('')
      .map(toCell)
      .join('')

  const rows = []
  rows[0] = toRow(columns)
  for (let i = 1; i <= rowsCount; i++) {
    rows.push(toRow(cells, i))
  }
  return rows.join('')
}

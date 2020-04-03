// Street Fighter 2 - Character Selection

// the list of characters who have been hovered by the selection cursor after
// all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);

// Selection cursor is circular horizontally but not vertically!

type TMethodsProps = {
  [key: string]: () => void
}

export function streetFighterSelection(
  fighters: Array<string[]>,
  initial_position: number[],
  moves: string[]
) {
  const result: string[] = []
  let [y, x] = initial_position

  const pushResult = () => result.push(fighters[y][x])

  const methods: TMethodsProps = {
    up: () => (y = 0),
    down: () => (y = 1),
    left: () => (x = x == 0 ? 5 : x - 1),
    right: () => (x = x == 5 ? 0 : x + 1),
  }

  moves.forEach((el) => {
    methods[el]()
    pushResult()
  })

  return result
}

const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
]
const initial_position = [0, 0]

const moves1 = ["up", "left", "right", "left", "left"] //['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
const moves2 = ["right", "down", "left", "left", "left", "left", "right"] //['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

console.log(streetFighterSelection(fighters, initial_position, moves1))
console.log(streetFighterSelection(fighters, initial_position, moves2))

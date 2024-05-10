import { Cell } from './Cell'
import GraphemeSplitter from 'grapheme-splitter'

type Props = {
  guess: string
}

export const CurrentRow = ({ guess }: Props) => {
  const splitter = new GraphemeSplitter()
  const splitGuess = splitter.splitGraphemes(guess)
  const emptyCells = Array.from(Array(5 - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}

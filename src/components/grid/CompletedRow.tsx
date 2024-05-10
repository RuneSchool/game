import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import GraphemeSplitter from 'grapheme-splitter'

type Props = {
  guess: string
}

export const CompletedRow = ({ guess }: Props) => {
  const statuses = getGuessStatuses(guess)
  const splitter = new GraphemeSplitter()

  return (
    <div className="flex justify-center mb-1">
      {splitter.splitGraphemes(guess).map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} />
      ))}
    </div>
  )
}

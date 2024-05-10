import { solution } from './words'
import GraphemeSplitter from 'grapheme-splitter'

export type CharStatus = 'absent' | 'present' | 'correct'

export type CharValue =
  | 'ᚠ'
  | 'ᚢ'
  | 'ᚦ'
  | 'ᚩ'
  | 'ᚱ'
  | 'ᚳ'
  | 'ᚷ'
  | 'ᚹ'
  | 'ᚻ'
  | 'ᚾ'
  | 'ᛁ'
  | 'ᛄ'
  | 'ᛡ'
  | 'ᛈ'
  | 'ᛉ'
  | 'ᛋ'
  | 'ᛏ'
  | 'ᛒ'
  | 'ᛖ'
  | 'ᛗ'
  | 'ᛚ'
  | 'ᛝ'
  | 'ᛞ'
  | 'ᛟ'
  | 'ᚫ'
  | 'ᚣ'
  | 'ᛣ'
  | 'ᚸ'

const splitter = new GraphemeSplitter()

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}

  guesses.forEach((word) => {
    splitter.splitGraphemes(word).forEach((letter, i) => {
      if (!solution.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === solution[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = splitter.splitGraphemes(solution)
  const splitGuess = splitter.splitGraphemes(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}

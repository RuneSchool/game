import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="ᚠ" onClick={onClick} status={charStatuses['ᚠ']} />
        <Key value="ᚢ" onClick={onClick} status={charStatuses['ᚢ']} />
        <Key value="ᚦ" onClick={onClick} status={charStatuses['ᚦ']} />
        <Key value="ᚩ" onClick={onClick} status={charStatuses['ᚩ']} />
        <Key value="ᚱ" onClick={onClick} status={charStatuses['ᚱ']} />
        <Key value="ᚳ" onClick={onClick} status={charStatuses['ᚳ']} />
        <Key value="ᚷ" onClick={onClick} status={charStatuses['ᚷ']} />
        <Key value="ᚹ" onClick={onClick} status={charStatuses['ᚹ']} />
        <Key value="ᚻ" onClick={onClick} status={charStatuses['ᚻ']} />
        <Key value="ᚾ" onClick={onClick} status={charStatuses['ᚾ']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="ᛁ" onClick={onClick} status={charStatuses['ᛁ']} />
        <Key value="ᛄ" onClick={onClick} status={charStatuses['ᛄ']} />
        <Key value="ᛡ" onClick={onClick} status={charStatuses['ᛡ']} />
        <Key value="ᛈ" onClick={onClick} status={charStatuses['ᛈ']} />
        <Key value="ᛉ" onClick={onClick} status={charStatuses['ᛉ']} />
        <Key value="ᛋ" onClick={onClick} status={charStatuses['ᛋ']} />
        <Key value="ᛏ" onClick={onClick} status={charStatuses['ᛏ']} />
        <Key value="ᛒ" onClick={onClick} status={charStatuses['ᛒ']} />
        <Key value="ᛖ" onClick={onClick} status={charStatuses['ᛖ']} />
        <Key value="ᛗ" onClick={onClick} status={charStatuses['ᛗ']} />
      </div>
      <div className="flex justify-center mb-1">
      <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key value="ᛚ" onClick={onClick} status={charStatuses['ᛚ']} />
        <Key value="ᛝ" onClick={onClick} status={charStatuses['ᛝ']} />
        <Key value="ᛞ" onClick={onClick} status={charStatuses['ᛞ']} />
        <Key value="ᛟ" onClick={onClick} status={charStatuses['ᛟ']} />
        <Key value="ᚫ" onClick={onClick} status={charStatuses['ᚫ']} />
        <Key value="ᚣ" onClick={onClick} status={charStatuses['ᚣ']} />
        <Key value="ᛣ" onClick={onClick} status={charStatuses['ᛣ']} />
        <Key value="ᚸ" onClick={onClick} status={charStatuses['ᚸ']} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}

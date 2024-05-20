import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="ᚻᚫ‍ᚹ᛫​ᛏ᛫​ᛈᛚᛖ‍ᛡ" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-lg text-gray-500 dark:text-gray-300">
        ᚸᛖᛋ᛫​ᚦ᛭​ᚹᚢ‍ᚱᛞᛚ᛫​ᛁᚾ᛫​6᛫​ᛏᚱᚫ‍ᛡᛉ᛫​᛫​ᚪᚠᛏᛟ‍ᚱ᛫​ᛇᚳ᛫​ᚸᛖᛋ᛬​ᚦ᛫​ᛣᚢᛚᛟ‍ᚱ᛫​ᚠ‍ᚠ᛫​ᚦ᛫​ᛏᚫ‍ᛡᛚᛉ᛫​ᚹᛁᛚ᛫​ᚳᛖ‍ᛡᚾᚷ᛫​ᛏ᛫​ᛋ‍ᚳᚩ‍ᚹ᛫​ᚻᚫ‍ᚹ᛫​ᛣᛚᚩ‍ᚹᛋ᛫​ᛡᚩ‍ᚱ᛫​ᚸᛖᛋ᛫​ᚹᚩᛉ᛫​ᛏ᛫​ᚦ᛫​ᚹᚢ‍ᚱᛞ
      </p>
      <p className="text-lg text-red-500 dark:text-red-300">
        ᚹᚢ‍ᚱᛞᛉ᛫​ᛞᚣ‍ᚹ᛫​ᚾᚩᛏ᛫​ᛡᚣ‍ᚹᛉ᛫​ᚦ᛫​ᚱᚣ‍ᚹᚾᛉ⁝​᛭​ᛇ᛭​ᛠ᛭​ᚪ
      </p>
      <p className="text-lg text-red-500 dark:text-red-300">
        ​ᛟᛋᛡᚣ‍ᚹᛗ᛫​ᛟ᛫​ᛒᚱᛁᛏᛁᛋ‍ᚳᛄ᛫​ᛋᛈᛖᛚᛁᛝ
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ᛈ" status="correct" />
        <Cell value="ᚫ" />
        <Cell value="ᚾ" />
        <Cell value="ᛏ" />
        <Cell value="ᛋ" />
      </div>
      <p className="text-lg text-gray-500 dark:text-gray-300">
        ᚦ᛫​ᛚᛖᛏᛟ‍ᚱ᛭​ᛈ᛫​ᛁᛉ᛫​ᛁᚾ᛫​ᚦ᛫​ᚹᚢ‍ᚱᛞ᛫​ᚾ᛫​ᛁᚾ᛫​ᚦ᛫​ᛣᛟᚱᛖᛣᛏ᛫​ᛋᛈᚩᛏ
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ᛋ" />
        <Cell value="ᚩ" />
        <Cell value="ᛚ" status="present" />
        <Cell value="ᛁ" />
        <Cell value="ᛞ" />
      </div>
      <p className="text-lg text-gray-500 dark:text-gray-300">
      ᚦ᛫​ᛚᛖᛏᛟ‍ᚱ᛭ᛚ᛫​ᛁᛉ᛫​ᛁᚾ᛫​ᚦ᛫​ᚹᚢ‍ᚱᛞ᛫ᛒᚢᛏ᛫​ᛁᚾ᛫​ᚦ᛫ᚱᚩᛝ᛫​ᛋᛈᚩᛏ
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ᛣ" />
        <Cell value="ᚱ" />
        <Cell value="ᚫ" />
        <Cell value="ᚹ" status="absent" />
        <Cell value="ᚳ" />
      </div>
      <p className="text-lg text-gray-500 dark:text-gray-300">
      ᚦ᛫​ᛚᛖᛏᛟ‍ᚱ᛭​ᚹ᛫​ᛁᛉ᛫ᚾᚩᛏ᛫​​ᛁᚾ᛫​ᚦ᛫​ᚹᚢ‍ᚱᛞ᛫​ᛁᚾ᛫​ᛖᚾᛄ᛫​ᛋᛈᚩᛏ
      </p>
    </BaseModal>
  )
}

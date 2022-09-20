import { useMemo } from 'react'
import Link from 'next/link'

interface IButton {
  text: string
  type: ButtonType
  link?: string
  onClick?: () => void
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Link = 'link',
  Disabled = 'disabled',
}

const switchButtonStyle = (type: ButtonType) => {
  switch (type) {
    case ButtonType.Primary:
      return `bg-indigo-700 hover:bg-indigo-600 rounded text-white`

    case ButtonType.Secondary:
      return `hover:border-indigo-600 hover:text-indigo-600 border border-indigo-700 text-indigo-700`

    case ButtonType.Link:
      return `focus:outline-none hover:bg-gray-100 rounded text-indigo-700`

    case ButtonType.Disabled:
      return 'bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-600'
  }
}

const baseStyle =
  'mx-2 my-1 transition duration-150 ease-in-out rounded px-8 py-3 text-sm'

const Button = ({ text, type, link, onClick }: IButton) => {
  const content = useMemo(
    () => (
      <button
        onClick={onClick}
        className={`${baseStyle} ${switchButtonStyle(type)}`}
      >
        {text}
      </button>
    ),
    [text, type, onClick]
  )

  if (link) {
    return <Link href={link}>{content}</Link>
  }

  return <>{content}</>
}

export { Button }

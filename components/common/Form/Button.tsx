import Link from 'next/link'

interface IButton {
  children: string
  overrideClassName?: string
  type: ButtonType
  submit?: boolean
  link?: string
  onClick?: (event: any) => void
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
      return `btn-primary`

    case ButtonType.Secondary:
      return `btn-secondary`

    case ButtonType.Link:
      return `btn-link`

    case ButtonType.Disabled:
      return 'btn-disabled'
  }
}

const Button = ({
  type,
  link,
  onClick,
  submit,
  overrideClassName,
  children,
}: IButton) => {
  if (link) {
    return (
      <Link href={link} passHref>
        <a
          onClick={onClick}
          className={`btn ${switchButtonStyle(type)} ${overrideClassName}`}
          type={submit ? 'submit' : 'button'}
        >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`btn ${switchButtonStyle(type)} ${overrideClassName}`}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}

export { Button }

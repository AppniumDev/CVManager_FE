import { useMemo } from 'react'

interface IBadge {
  children: JSX.Element | string
  color: BadgeColor
}

export enum BadgeColor {
  Blue = 'blue',
  Green = 'green',
  Indigo = 'indigo',
  Red = 'red',
}

const switchBadgeStyle = (type: BadgeColor) => {
  switch (type) {
    case BadgeColor.Blue:
      return {
        outer: 'bg-blue-100',
        text: 'text-blue-500',
      }

    case BadgeColor.Green:
      return {
        outer: 'bg-green-100',
        text: 'text-green-500',
      }

    case BadgeColor.Indigo:
      return {
        outer: 'bg-indigo-100',
        text: 'text-indigo-700',
      }

    case BadgeColor.Red:
      return {
        outer: 'bg-red-100',
        text: 'text-red-500',
      }
  }
}

const baseStyle =
  'mx-2 my-1 transition duration-150 ease-in-out rounded px-8 py-3 text-sm'

const Badge = ({ color, children }: IBadge) => {
  const styles = useMemo(() => switchBadgeStyle(color), [color])
  return (
    <div className="flex justify-start">
      <div
        className={`flex items-center justify-center px-3 h-8 mb-4 ${styles.outer} rounded-md md:mb-0`}
      >
        <div className="flex items-center">
          <span className={`text-xs font-normal ${styles.text}`}>
            {children}
          </span>
        </div>
      </div>
    </div>
  )
}

export { Badge }

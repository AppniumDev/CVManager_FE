import { PlusCircleIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { Typography } from '@mui/material'
import { SVGProps, useMemo, useState } from 'react'
import { truncate } from 'lodash'

export interface ISectionEntity {
  title: string
  subtitle?: string
  data: any[]
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  actionClickNew?: () => void
  actionClickEdit?: (id: string) => void
}

const SectionEntityItem = ({
  item,
  icon,
  actionClickEdit,
}: {
  item: any
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  actionClickEdit?: (id: string) => void
}) => {
  const [isHover, setIsHover] = useState(false)
  const Icon = useMemo(() => {
    if (isHover) {
      return PencilSquareIcon
    }
    return icon
  }, [icon, isHover])
  return (
    <div
      className="flex flex-col items-center justify-center w-32 h-20 gap-4 p-2 border border-blue-300 rounded-lg shadow-md cursor-pointer group hover:bg-blue-300 hover:shadow-2xl"
      onClick={() => {
        if (item.id && actionClickEdit) {
          actionClickEdit(item?.id)
        }
      }}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex flex-col items-center justify-center h-48 gap-2">
        <div className="flex flex-col items-center justify-center">
          <Icon className={`w-6 h-6 group-hover:text-white`} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm font-medium">
            {truncate(item?.title || item?.name || item?.description, {
              length: 30,
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

const SectionEntity = ({
  title,
  subtitle,
  data,
  icon,
  actionClickNew,
  actionClickEdit,
}: ISectionEntity) => {
  return (
    <>
      <Typography variant="h6" component="h2" className="mb-4">
        {title}
      </Typography>
      <div className="flex w-full gap-8 pt-4 mb-3">
        <div className="flex items-center justify-start">
          <div className="flex items-center gap-4">
            {data.map((item, index) => (
              <SectionEntityItem
                item={item}
                icon={icon}
                actionClickEdit={actionClickEdit}
                key={index + '_form_item_' + title.toLowerCase()}
              />
            ))}
            <div
              className="flex flex-col items-center justify-center h-20 gap-4 p-2 rounded-lg cursor-pointer group hover:bg-blue-400 w-28 hover:shadow-2xl"
              onClick={actionClickNew}
            >
              <PlusCircleIcon className="self-center w-10 h-10 text-sm font-light text-blue-300 group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { SectionEntity }

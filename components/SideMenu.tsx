import Link from 'next/link'
import Image from 'next/image'
import logoCV from '../assets/logo_cv.jpg'
import {
  TruckIcon,
  ClipboardDocumentListIcon,
  CheckBadgeIcon,
  Battery50Icon,
} from '@heroicons/react/24/outline'
import { SVGProps } from 'react'
import { useRouter } from 'next/router'

type IMenuItem = {
  title: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  link: string
  counter?: number
}
const MenuItem = (item: IMenuItem) => {
  const router = useRouter()
  const Icon = item.icon
  const isActive = router.asPath === item.link

  return (
    <Link href={item.link} passHref>
      <li
        className={`flex items-center justify-between w-full px-4 py-3 mb-4 text-gray-500 rounded-lg cursor-pointer group hover:text-white-500 hover:bg-blue-500 hover:shadow-xl ${
          isActive ? 'bg-blue-500 shadow-xl text-white' : ''
        }`}
      >
        <a>
          <div className="flex items-center">
            <Icon
              className={`w-6 h-6 mr-2 group-hover:text-white ${
                isActive ? 'text-white' : 'text-blue-600'
              }`}
            />
            <span className="ml-2 text-sm group-hover:text-white">
              {item.title}
            </span>
          </div>
          {item?.counter && (
            <div className="flex items-center justify-center px-3 py-1 text-xs text-gray-500 bg-gray-700 rounded">
              {item.counter}
            </div>
          )}
        </a>
      </li>
    </Link>
  )
}

const SideMenu = () => {
  return (
    <div className="absolute flex flex-col justify-between w-64 min-h-screen bg-white shadow sm:relative md:h-full">
      <div className="px-8">
        <div className="flex items-center w-full h-32">
          <Image
            src={logoCV}
            alt="Logo"
            width={200}
            height={180}
            // blurDataURL="data:..." automatically provided
          />
        </div>
        <ul className="mt-12">
          <MenuItem title="Home" icon={TruckIcon} link="/" />
          <MenuItem title="Veicoli" icon={TruckIcon} link="/veicoli" />
          <MenuItem
            title="Assicurazioni"
            icon={ClipboardDocumentListIcon}
            link="/assicurazioni"
          />
          <MenuItem title="Revisioni" icon={CheckBadgeIcon} link="/revisioni" />
          <MenuItem
            title="Interventi"
            icon={Battery50Icon}
            link="/interventi"
          />
        </ul>
      </div>
    </div>
  )
}

export { SideMenu }

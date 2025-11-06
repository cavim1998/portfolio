'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowForwardIos } from "react-icons/md"

interface CardProps {
  title: string
  image: string
  framework: string[]
  url?: string
}

function CardProject(props: CardProps) {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image src={props.image} alt="image Project" width={390} height={235} />
      <Link href={props.url || ''} target="_blank">
        <div className={`p-4 flex justify-between items-center gap-2 bg-gray-700 ${ props.url ? 'hover:cursor-pointer' : ''}`}>
          <div className='font-bold'>
            { props.url && <p className='text-[10px]'>CLICK HERE TO VISIT</p> }
            <p className='text-lg'>{props.title}</p>
            <p className='font-normal text-sm'>{props.framework.join(', ')}</p>
          </div>
          {
            props.url && <MdOutlineArrowForwardIos />
          }
          
        </div>
      </Link>
    </div>
  )
}

export default CardProject
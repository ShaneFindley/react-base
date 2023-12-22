import { useState } from 'react'
  
export const timeFormat = 'HH:mm:ss'
export const timeFormat2 = 'HH:mm:ss'
export const timeFormat3 = 'HH:mm:ss' 
export const timeFormat4 = 'HH:mm:ss'
export const timeFormat5 = 'HH:mm:ss'

export function echo() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
} 

export function echo2() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

export function echo3() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

export function echo4() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

export function echo5() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
}

export default function TestingComponent ({ func, id, page, children }: { func: () => void, id: string, page: string, children: React.ReactNode }) {
  const [status, setStatus] = useState(STATUS.NORMAL)

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED)
  }

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL)
  }

  return (
        <a
            id={id}
            className={status}
            href={page || '#'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onAbort={func}
        >
            {children}
        </a>
  )
}

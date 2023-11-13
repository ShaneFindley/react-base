import { useState } from 'react'

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
}

function blah() {
  console.log("Testing coverage");
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

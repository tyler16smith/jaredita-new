// stores all wrapper functions for different animations
import { type ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

type SmoothReorderWithFramerProps = {
  children: React.ReactNode
  key?: string
}

export const SmoothReorderWithFramer = ({
  children,
  key,
}: SmoothReorderWithFramerProps) => (
  <motion.div
    layout
    key={key}
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    transition={{
      height: { duration: 0.3 },
      opacity: { duration: 0.5 },
    }}
  >
    {children}
  </motion.div>
)

type SlideProps = {
  children: React.ReactNode
  open: boolean
  key?: string
}

export const SlideFromTop = ({ children, key, open }: SlideProps) => {
  const [show, setShow] = useState(open)
  const [animateOpen, setAnimateOpen] = useState(false)

  useEffect(() => {
    if (open) {
      setShow(true)
      setTimeout(() => setAnimateOpen(true), 10)
      return
    }
    setAnimateOpen(false)
    setTimeout(() => setShow(false), 200)
  }, [open])

  if (!show) return null
  return (
    <div
      key={key}
      className={classNames(
        `transition-all duration-300 ease-in-out overflow-hidden`,
        {
          'max-h-0 opacity-0': !animateOpen,
          'max-h-screen opacity-100': animateOpen,
        },
      )}
    >
      {children}
    </div>
  )
}

export const SlideFromBottom = ({ children, key, open }: SlideProps) => {
  const [show, setShow] = useState(open)
  const [animateOpen, setAnimateOpen] = useState(false)

  useEffect(() => {
    if (open) {
      setShow(true)
      setTimeout(() => setAnimateOpen(true), 10)
      return
    }
    setAnimateOpen(false)
    setTimeout(() => setShow(false), 200)
  }, [open])

  if (!show) return null
  return (
    <div
      key={key}
      className={classNames(
        // `transition-[transform] duration-300 ease-in-out overflow-hidden`,
        // {
        //   'translate-y-full opacity-0': !animateOpen,
        //   'translate-y-0 opacity-100': animateOpen,
        // },
      )}
    >
      {children}
    </div>
  )
}

type FadeInOutWrapperProps = {
  open: boolean
  children: ReactNode
  key?: string
  additionalClassNames?: string
}

export const FadeInOutWrapper: React.FC<FadeInOutWrapperProps> = ({
  open,
  children,
  key = 'fade-in-out',
  additionalClassNames,
}) => {
  const [show, setShow] = useState(open)
  const [animateOpen, setAnimateOpen] = useState(false)

  useEffect(() => {
    if (open) {
      setShow(true)
      setTimeout(() => setAnimateOpen(true), 10)
      return
    }
    setAnimateOpen(false)
    setTimeout(() => setShow(false), 200)
  }, [open])

  if (!show) return null
  return (
    <div
      key={key}
      className={classNames(
        'transition-opacity duration-300 ease-in-out',
        {
          'opacity-0': !animateOpen,
          'opacity-100': animateOpen,
        },
        additionalClassNames,
      )}
    >
      {children}
    </div>
  )
}

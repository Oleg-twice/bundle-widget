import { RefObject, useState, useMemo, useEffect } from 'react'

export const useOnScreen = (ref: RefObject<HTMLElement>) => {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [])


  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current as Element)
    }
 
    return () => observer.disconnect()
  }, [observer, ref])

  return isIntersecting
}
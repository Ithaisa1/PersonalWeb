import { useState, useEffect, useRef, useCallback } from 'react'

export function useMouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })
  const ref = useRef(null)

  const handleMouse = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousemove', handleMouse)
    return () => el.removeEventListener('mousemove', handleMouse)
  }, [handleMouse])

  return { ref, x: pos.x, y: pos.y }
}

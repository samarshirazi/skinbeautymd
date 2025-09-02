"use client"
import { useEffect, useRef } from 'react'

export default function BeforeAfter({ before, after, altBefore='Before', altAfter='After' }: { before: string; after: string; altBefore?: string; altAfter?: string }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const afterRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = rootRef.current, afterEl = afterRef.current, handle = handleRef.current
    if (!root || !afterEl || !handle) return
    let pct = 50
    const set = (p:number) => {
      pct = Math.max(0, Math.min(100, p))
      afterEl.style.width = pct + '%'
      handle.style.left = pct + '%'
    }
    const onMove = (e: MouseEvent | TouchEvent) => {
      const rect = root.getBoundingClientRect()
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
      const x = clientX - rect.left
      set(100 * x / rect.width)
    }
    const start = () => {
      window.addEventListener('mousemove', onMove as any)
      window.addEventListener('touchmove', onMove as any, { passive: true })
      window.addEventListener('mouseup', end)
      window.addEventListener('touchend', end)
    }
    const end = () => {
      window.removeEventListener('mousemove', onMove as any)
      window.removeEventListener('touchmove', onMove as any)
      window.removeEventListener('mouseup', end)
      window.removeEventListener('touchend', end)
    }
    handle.addEventListener('mousedown', start)
    handle.addEventListener('touchstart', start, { passive: true } as any)
    root.addEventListener('click', onMove as any)
    set(50)
    return () => {
      end()
      handle.removeEventListener('mousedown', start)
      handle.removeEventListener('touchstart', start)
      root.removeEventListener('click', onMove as any)
    }
  }, [])
  return (
    <div className="ba" ref={rootRef} aria-label="Before and after result slider">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={before} alt={altBefore} loading="lazy" decoding="async" />
      <div className="after" ref={afterRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={after} alt={altAfter} loading="lazy" decoding="async" />
      </div>
      <div className="handle" ref={handleRef} aria-hidden>↔</div>
    </div>
  )
}


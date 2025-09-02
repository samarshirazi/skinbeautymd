"use client"
import React, { useReducer } from 'react'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type PointerEvent = React.PointerEvent<HTMLDivElement>
type InlineStyle = React.CSSProperties

type Props = {
  // Requested API
  beforeImage?: string
  afterImage?: string
  onChange?: (event: ChangeEvent) => void
  onPointerMove?: (event: PointerEvent) => void
  onPointerEnter?: (event: PointerEvent) => void
  onPointerLeave?: (event: PointerEvent) => void
  pointerMove?: boolean
  className?: string
  beforeClassName?: string
  afterClassName?: string
  buttonClassName?: string
  style?: InlineStyle
  beforeStyle?: InlineStyle
  afterStyle?: InlineStyle
  buttonStyle?: InlineStyle
  // Back-compat with existing usage
  before?: string
  after?: string
  altBefore?: string
  altAfter?: string
  // Optional blur mode (single image: original left, blurred right)
  src?: string
  alt?: string
  blurAmount?: number
  showLabels?: boolean
}

type State = { rangeValue: number }
type Action = { type: 'change'; payload: number } | { type: 'move'; payload: number }
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'change':
      return { rangeValue: action.payload }
    case 'move':
      return { rangeValue: Math.round(action.payload) }
    default:
      return state
  }
}

export default function BeforeAfter(props: Props) {
  const {
    beforeImage,
    afterImage,
    onChange,
    onPointerMove,
    onPointerEnter,
    onPointerLeave,
    pointerMove = false,
    className = 'ba',
    beforeClassName = 'before',
    afterClassName = 'after',
    buttonClassName = 'resize-button',
    style,
    beforeStyle,
    afterStyle,
    buttonStyle,
    // back-compat
    before,
    after,
    altBefore = 'Before',
    altAfter = 'After',
    // blur mode
    src,
    alt = 'Image',
    blurAmount = 12,
    showLabels = true,
  } = props

  // Prefer new API, fall back to legacy names
  const beforeSrc = src ? undefined : (beforeImage ?? before)
  const afterSrc = src ? undefined : (afterImage ?? after)

  const [{ rangeValue }, dispatch] = useReducer(reducer, { rangeValue: 50 })

  const handleChange = (event: ChangeEvent) => {
    dispatch({ type: 'change', payload: Number(event.target.value) })
    onChange?.(event)
  }

  const handlePointerMove = (event: PointerEvent) => {
    const { clientX, currentTarget } = event
    const { left, width } = currentTarget.getBoundingClientRect()
    const positionX = clientX - left
    if (positionX >= 0)
      dispatch({ type: 'move', payload: (positionX / width) * 100 })
    onPointerMove?.(event)
  }

  const handlePointerEnter = (event: PointerEvent) => {
    onPointerEnter?.(event)
  }

  const handlePointerLeave = (event: PointerEvent) => {
    onPointerLeave?.(event)
  }

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'e-resize',
        userSelect: 'none',
        ...style,
      }}
      onPointerMove={pointerMove ? handlePointerMove : undefined}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      aria-label="Before and after result slider"
    >
      {src ? (
        // Blur mode: base is original; overlay is blurred clipped from left so right side shows blur
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" decoding="async" style={{ display: 'block', width: '100%' }} />
          <div
            className={`${afterClassName} blurred`}
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              width: '100%',
              clipPath: `inset(0 0 0 ${rangeValue}%)`,
              pointerEvents: 'none',
              ...afterStyle,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              style={{
                display: 'block',
                width: '100%',
                filter: `blur(${blurAmount}px)`,
                transform: 'scale(1.02)',
              }}
            />
          </div>
        </>
      ) : (
        // Standard mode: base is after image; overlay is before image clipped using clip-path
        <>
          <div className={afterClassName} style={{ ...afterStyle }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={afterSrc!} alt={altAfter} style={{ maxWidth: '100%', display: 'block', width: '100%' }} />
          </div>

          <div
            className={beforeClassName}
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              width: '100%',
              clipPath: `inset(0 ${100 - rangeValue}% 0 0)`,
              pointerEvents: 'none',
              ...beforeStyle,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={beforeSrc!} alt={altBefore} style={{ width: '100%', display: 'block' }} />
          </div>
        </>
      )}

      {!pointerMove && (
        <>
          <input
            type="range"
            min={0}
            max={100}
            value={rangeValue}
            name="slider"
            onChange={handleChange}
            aria-label="Before after slider"
            style={{
              appearance: 'none',
              backgroundColor: 'transparent',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              cursor: 'inherit',
            }}
          />
          <div
            className={buttonClassName}
            style={{
              backgroundColor: '#fff',
              pointerEvents: 'none',
              position: 'absolute',
              top: '50%',
              left: `${rangeValue}%`,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              width: 30,
              height: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'var(--shadow-lg)',
              ...buttonStyle,
            }}
            aria-hidden
          >
            <svg
              fill="#333"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M24,12l-5.7-5.7V11c-3.7,0-9,0-12.6,0V6.3L0,12l5.8,5.7V13c3.6,0,8.9,0,12.5,0v4.7L24,12z" />
            </svg>
          </div>
        </>
      )}

      {showLabels && (
        <>
          <div className="ba-label before">{src ? 'Original' : altBefore}</div>
          <div className="ba-label after">{src ? 'Blurred' : altAfter}</div>
        </>
      )}
    </div>
  )
}

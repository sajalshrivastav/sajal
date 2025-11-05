import React from 'react'

/**
 * TooltipBubble - customizable tooltip bubble with arrow
 * Props:
 *   text: string (main label)
 *   subtext?: string (optional sub-label)
 *   position?: 'top' | 'bottom' | 'left' | 'right' (default: 'top')
 *   className?: string (extra classes)
 *   style?: object (inline styles)
 */
const TooltipBubble = ({
  text,
  subtext,
  position = 'top',
  className = '',
  style = {},
  bgColor = '#222',
  textColor = '#fff',
  arrowColor,
  borderRadius = '0.75rem', // rounded-xl
  fontSize = '0.95rem', // text-sm
}) => {
  // Arrow position classes
  const arrowPos = {
    top: 'bottom-0 left-1/2 -translate-x-1/2',
    bottom: 'top-0 left-1/2 -translate-x-1/2 rotate-180',
    left: 'right-0 top-1/2 -translate-y-1/2 -rotate-90',
    right: 'left-0 top-1/2 -translate-y-1/2 rotate-90',
  }[position]

  const bubbleStyle = {
    background: bgColor,
    color: textColor,
    borderRadius,
    fontSize,
    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.12)',
    ...style,
  }
  const arrowFill = arrowColor || bgColor

  return (
    <div
      className={`relative inline-block px-4 py-2 font-medium ${className}`}
      style={bubbleStyle}
    >
      <div>{text}</div>
      {subtext && (
        <div style={{ fontSize: '0.8rem', color: '#ccc', marginTop: 2 }}>
          {subtext}
        </div>
      )}
      {/* Arrow */}
      <span
        className={`absolute ${arrowPos} w-3 h-3 pointer-events-none`}
        style={{ zIndex: 2 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 12 12">
          <polygon points="6,0 12,12 0,12" fill={arrowFill} />
        </svg>
      </span>
    </div>
  )
}

export default TooltipBubble

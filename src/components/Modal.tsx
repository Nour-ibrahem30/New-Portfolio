import React, { useRef, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'small' | 'normal' | 'big'
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'normal' }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const modalStart = useRef({ x: 0, y: 0 })
  const dragHandle = useRef<HTMLDivElement>(null)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const [isMaximized, setIsMaximized] = React.useState(false)

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMinimized(!isMinimized)
  }

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMaximized(!isMaximized)
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClose()
  }

  useEffect(() => {
    if (!isOpen || !modalRef.current || !dragHandle.current) return

    const modal = modalRef.current
    const handle = dragHandle.current
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      dragStart.current = { x: e.clientX, y: e.clientY }
      const rect = modal.getBoundingClientRect()
      modalStart.current = { x: rect.left, y: rect.top }
      modal.style.transition = 'none'
      handle.style.cursor = 'grabbing'
      e.preventDefault()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      
      const deltaX = e.clientX - dragStart.current.x
      const deltaY = e.clientY - dragStart.current.y
      
      modal.style.left = `${modalStart.current.x + deltaX}px`
      modal.style.top = `${modalStart.current.y + deltaY}px`
      modal.style.transform = 'none'
    }

    const handleMouseUp = () => {
      isDragging.current = false
      modal.style.transition = 'all 0.3s ease'
      handle.style.cursor = 'grab'
    }

    handle.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      handle.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isOpen])

  if (!isOpen) return null

  let sizeClass = size === 'small' ? 'small-page' : size === 'big' ? 'Big-page' : ''
  if (isMaximized) sizeClass = 'Big-page'
  if (isMinimized) sizeClass = 'small-page'

  return (
    <div ref={modalRef} className={`page-project ${sizeClass}`} style={{ 
      position: 'fixed',
      transition: 'all 0.3s ease'
    }}>
      <div className="parent-span">
        <span onClick={handleClose} style={{ backgroundColor: 'var(--accent-red)' }}></span>
        <span onClick={handleMinimize} style={{ backgroundColor: 'var(--accent-yellow)' }}></span>
        <span onClick={handleMaximize} style={{ backgroundColor: 'var(--accent-green)' }}></span>
        <div ref={dragHandle} style={{ 
          flex: 1, 
          cursor: 'grab', 
          display: 'flex', 
          alignItems: 'center',
          paddingLeft: '12px',
          userSelect: 'none'
        }}>
          <h6 className="mb-0 text-white">{title}</h6>
        </div>
      </div>
      <div className="parent-Api">
        {children}
      </div>
    </div>
  )
}

export default Modal
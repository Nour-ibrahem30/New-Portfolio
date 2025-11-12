import React, { useRef, useEffect, useState } from 'react'

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
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isMaximized) setIsMaximized(false)
    setIsMinimized(prev => !prev)
  }

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isMinimized) setIsMinimized(false)
    setIsMaximized(prev => !prev)
  }

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    onClose()
  }



  useEffect(() => {
    if (!isOpen || !modalRef.current || !dragHandle.current) return

    const modal = modalRef.current
    const handle = dragHandle.current

    if (isMaximized || isMinimized) return

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
  }, [isOpen, isMaximized, isMinimized])

  if (!isOpen) return null

  const getModalSize = () => {
    const normalWidth = size === 'small' ? '400px' : size === 'big' ? '900px' : '800px'
    const normalHeight = '600px'
    
    if (isMinimized) return { width: '350px', height: '500px' }
    if (isMaximized) {
      const baseWidth = parseInt(normalWidth)
      return { width: `${baseWidth * 1.5}px`, height: normalHeight }
    }
    return { width: normalWidth, height: normalHeight }
  }

  return (
    <>
      <div
        ref={modalRef}
        className="page-project"
        style={{
          position: 'fixed',
          ...getModalSize(),
          transition: 'all 0.3s ease',
          zIndex: 10000
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="parent-span" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px', borderRadius: '8px 8px 0 0' }}>
          <span onClick={handleClose} style={{ backgroundColor: 'var(--accent-red)', width: 10, height: 10, borderRadius: '50%', marginLeft: '10px', cursor: 'pointer' }} />
          <span onClick={handleMinimize} style={{ backgroundColor: 'var(--accent-yellow)', width: 10, height: 10, borderRadius: '50%', cursor: 'pointer' }} />
          <span onClick={handleMaximize} style={{ backgroundColor: 'var(--accent-green)', width: 10, height: 10, borderRadius: '50%', cursor: 'pointer' }} />
          <div
            ref={dragHandle}
            style={{
              flex: 1,
              cursor: isMaximized ? 'default' : 'grab',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 12,
              userSelect: 'none'
            }}
          >
            <h6 className="mb-0 text-white" style={{ margin: 0 }}>{title}</h6>
          </div>
        </div>

        <div className="parent-Api" style={{ overflowY: 'auto', maxHeight: isMinimized ? '460px' : '100%' }}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
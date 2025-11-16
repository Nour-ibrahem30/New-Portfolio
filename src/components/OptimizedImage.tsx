import React, { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div style={{ position: 'relative', ...style }} className={className}>
      {!isLoaded && !hasError && (
        <div style={{
          width: width || '100%',
          height: height || 140,
          background: '#1a1a1d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px'
        }}>
          <div style={{ color: '#666', fontSize: '12px' }}>Loading...</div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        style={{
          display: isLoaded ? 'block' : 'none',
          width: '100%',
          height: height || 140,
          objectFit: 'cover',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)'
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
      {hasError && (
        <div style={{
          width: width || '100%',
          height: height || 140,
          background: '#1a1a1d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
          border: '1px solid #333'
        }}>
          <div style={{ color: '#666', fontSize: '12px' }}>Image unavailable</div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage
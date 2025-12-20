import React, { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
  srcSet?: string
  sizes?: string
  fallback?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  loading = 'lazy',
  srcSet,
  sizes,
  fallback
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  // try corresponding webp version if original is jpeg/png/jfif
  const webpSrc = currentSrc.replace(/\.(jpe?g|png|jfif)$/i, '.webp')

  const handleError = () => {
    if (fallback && currentSrc !== fallback) {
      setCurrentSrc(fallback)
      setHasError(false)
      return
    }
    setHasError(true)
  }

  return (
    <div style={{ position: 'relative', ...style }} className={className}>
      {!isLoaded && !hasError && (
        <div style={{
          width: width || '100%',
          height: height || 'auto',
          background: '#1a1a1d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px'
        }}>
          <div style={{ color: '#666', fontSize: '12px' }}>Loading...</div>
        </div>
      )}

      {!hasError ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          {srcSet && <source srcSet={srcSet} sizes={sizes} />}
          <img
            src={currentSrc}
            alt={alt}
            width={width as any}
            height={height as any}
            loading={loading}
            decoding="async"
            style={{
              display: isLoaded ? 'block' : 'none',
              width: '100%',
              height: height || 'auto',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)'
            }}
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
          />
        </picture>
      ) : (
        <div style={{
          width: width || '100%',
          height: height || 'auto',
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
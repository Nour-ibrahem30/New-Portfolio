// Web Vitals monitoring
export const measureWebVitals = () => {
  if ('web-vital' in window) return

  // LCP - Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries()
    const lastEntry = entries[entries.length - 1]
    console.log('LCP:', lastEntry.startTime)
  }).observe({ entryTypes: ['largest-contentful-paint'] })

  // CLS - Cumulative Layout Shift
  new PerformanceObserver((entryList) => {
    let clsValue = 0
    for (const entry of entryList.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value
      }
    }
    console.log('CLS:', clsValue)
  }).observe({ entryTypes: ['layout-shift'] })

  // FID - First Input Delay
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('FID:', (entry as any).processingStart - entry.startTime)
    }
  }).observe({ entryTypes: ['first-input'] })
}
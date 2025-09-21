import { useState, useEffect } from 'react'
import { X, AlertTriangle } from 'lucide-react'
import { Button } from './ui/button'

export function SafariBrowserNotice() {
  const [showNotice, setShowNotice] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed the notice
    const dismissed = localStorage.getItem('safari-notice-dismissed')
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Detect Safari
    const userAgent = navigator.userAgent
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) && 
                     /webkit/i.test(userAgent) && 
                     !/chrome/i.test(userAgent)
    
    if (isSafari) {
      setShowNotice(true)
    }
  }, [])

  const dismissNotice = () => {
    setShowNotice(false)
    setIsDismissed(true)
    localStorage.setItem('safari-notice-dismissed', 'true')
  }

  if (!showNotice || isDismissed) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-50 border-b border-amber-200 p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
          <div className="text-sm text-amber-800">
            <strong>Safari Browser Detected:</strong> For the best experience viewing this website, 
            we recommend using <strong>Chrome</strong>, <strong>Firefox</strong>, or <strong>Edge</strong>. 
            Safari may display some visual effects differently.
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={dismissNotice}
          className="text-amber-600 hover:text-amber-800 hover:bg-amber-100 flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
/**
 * Accessibility utilities for improved user experience
 */

/**
 * Checks if user prefers reduced motion
 * Used to disable or reduce animations for users with motion sensitivity
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Gets animation configuration based on user preferences
 * Returns reduced animation values if user prefers reduced motion
 */
export const getAnimationConfig = (normalDuration: number = 0.5) => {
  const reduced = prefersReducedMotion()
  return {
    duration: reduced ? 0.01 : normalDuration,
    ease: reduced ? 'linear' : 'easeInOut',
  }
}

/**
 * Validates color contrast ratio for WCAG compliance
 * Note: This is a placeholder that always returns true.
 * For production WCAG compliance, implement proper contrast checking using a library
 * like 'color-contrast-checker' or perform manual testing with assistive technologies.
 * @deprecated This function does not perform actual contrast validation
 * @returns Always returns true - not suitable for WCAG compliance validation
 */
export const hasGoodContrast = (): boolean => {
  // This is a placeholder function. Real WCAG compliance requires:
  // 1. Proper contrast ratio calculation (4.5:1 for normal text, 3:1 for large text)
  // 2. Manual testing with screen readers and assistive technologies
  // 3. Use of specialized libraries or tools for accurate measurement
  console.warn('hasGoodContrast is a placeholder and does not validate actual contrast ratios')
  return true
}

/**
 * Announces content to screen readers
 * Useful for dynamic content updates
 */
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Traps focus within a modal or dialog
 * Improves keyboard navigation accessibility
 */
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  
  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return
    
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus()
        e.preventDefault()
      }
    }
  }
  
  element.addEventListener('keydown', handleTabKey)
  
  return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
}

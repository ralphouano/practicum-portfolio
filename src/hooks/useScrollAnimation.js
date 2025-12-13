import { useEffect } from 'react'

/**
 * Custom hook for scroll-triggered fade-in animations
 * Automatically observes elements with 'fade-in-section' class
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const sections = document.querySelectorAll('.fade-in-section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])
}

export default useScrollAnimation


// Safari detection and fixes utility

export const isSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent;
  const isSafariUA = /^((?!chrome|android).)*safari/i.test(userAgent);
  const isWebKit = /webkit/i.test(userAgent);
  const isChrome = /chrome/i.test(userAgent);
  
  return isSafariUA && isWebKit && !isChrome;
};

export const isMacSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent;
  const isMac = /macintosh|mac os x/i.test(userAgent);
  
  return isSafari() && isMac;
};

export const applySafariFixes = (): void => {
  if (!isSafari()) return;

  // Add Safari-specific class to body for CSS targeting
  document.body.classList.add('safari-browser');

  if (isMacSafari()) {
    document.body.classList.add('mac-safari');
  }

  // Apply minimal fixes after DOM is loaded
  setTimeout(() => {
    // Only target elements that cause the colorful overlay issue
    const problematicElements = document.querySelectorAll(
      '.hero-responsive [class*="backdrop-blur"], .testimonials [class*="backdrop-blur"], section [class*="backdrop-blur"]:not(header [class*="backdrop-blur"])'
    );

    problematicElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      // Disable backdrop-filter that causes the colorful overlay
      htmlElement.style.backdropFilter = 'none';
      (htmlElement.style as any).webkitBackdropFilter = 'none';
      htmlElement.style.background = 'rgba(255, 255, 255, 0.95)';
    });

    // Force hardware acceleration for elements that need it
    const elementsNeedingAcceleration = document.querySelectorAll('.hero-responsive, .nav-responsive');
    elementsNeedingAcceleration.forEach(element => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.transform = 'translateZ(0)';
      htmlElement.style.backfaceVisibility = 'hidden';
    });
  }, 100);
};

export const disableProblematicFeatures = (): void => {
  // This function is now handled by applySafariFixes
  return;
};
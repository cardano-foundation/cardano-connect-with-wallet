export function getMobileOS(): 'iOS' | 'Android' | 'unknown' {
  if ('userAgentData' in navigator) {
    const platform = (navigator as any).userAgentData?.platform;
    if (platform === 'Android') return 'Android';
  }

  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return 'iOS';
  if (/android/i.test(ua)) return 'Android';

  return 'unknown';
}

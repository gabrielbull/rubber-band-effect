export function isSafari() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') != -1) {
    return ua.indexOf('chrome') === -1;
  }
  return false;
}

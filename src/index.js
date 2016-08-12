import { isSafari } from './utils/browserDetection';

const bufferHeight = 1000;

let isOverscrolled = false;

function round(value) {
  if (value <= 0.95) return Math.round(value * 1000) / 1000;
  else if (value <= 0.975) return Math.round(value * 10000) / 10000;
  else return Math.round(value * 100000) / 100000;
}

function handleWheel(event, element, topBuffer, bottomBuffer) {
  if (!isOverscrolled) {
    isOverscrolled = element.scrollTop + event.deltaY < 0 ||
      element.scrollHeight - element.scrollTop <= element.clientHeight;
  } else {
    if (element.scrollTop + event.deltaY < 0 && event.deltaY < 0) {
      let newScroll = element.scrollTop + event.deltaY + 1 - parseInt(topBuffer.style.height);
      let position = round(1 + Math.log10((bufferHeight + newScroll) / bufferHeight));
      topBuffer.style.height = (bufferHeight - position * bufferHeight) + 'px';
      if (bufferHeight - position * bufferHeight <= 1) {
        element.scrollTop = bufferHeight - position * bufferHeight;
      } else {
        element.scrollTop = 1;
      }
    } else if (element.scrollHeight - element.scrollTop <= element.clientHeight && event.deltaY > 0) {
      let newScroll = event.deltaY - 1 + parseInt(bottomBuffer.style.height);
      let position = round(1 + Math.log10((bufferHeight - newScroll) / bufferHeight));
      bottomBuffer.style.height = (bufferHeight - position * bufferHeight) + 'px';
    } else {
      isOverscrolled = false;
    }
  }
}

export default function (element) {
  if (!document || !window) return null;
  else if (isSafari()) return null;

  const topBuffer = document.createElement('div');
  topBuffer.style.height = '0px';
  topBuffer.style.width = '100%';

  const bottomBuffer = document.createElement('div');
  bottomBuffer.style.height = '0px';
  bottomBuffer.style.width = '100%';

  if (element.firstChild) element.insertBefore(topBuffer, element.firstChild)
  else element.appendChild(topBuffer);
  element.appendChild(bottomBuffer);
  element.addEventListener('wheel', e => handleWheel(e, element, topBuffer, bottomBuffer));
}

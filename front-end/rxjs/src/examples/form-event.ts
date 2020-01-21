import { Observable } from 'rxjs';

function fromEvent(element: HTMLElement, eventName: string) {
  return new Observable(subscriber => {
    function eventHandler() {
      subscriber.next();
    }
    element.addEventListener(eventName, eventHandler);
    return () => {
      element.removeEventListener(eventName, eventHandler);
    };
  });
}

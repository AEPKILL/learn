import { Observable } from 'rxjs';

// 基本事件订阅 & 合并
Observable.fromEvent(document.getElementById('add'), 'click')
  .mapTo(1)
  .merge(
    Observable.fromEvent(document.getElementById('sub'), 'click').mapTo(-1)
  )
  .scan((total, now) => total + now, 0)
  .subscribe(value => {
    document.getElementById('view').innerText = `${value}`;
  });

// flat Observable
Observable.fromEvent(document, 'click')
  .flatMapTo(Observable.of(1, 2, 3))
  .subscribe(value => console.log(value));

// 可拖拽的 DOM 操作
const dragDOM = document.getElementById('view');
const mouseDown = Observable.fromEvent<MouseEvent>(dragDOM, 'mousedown');
const mouseUp = Observable.fromEvent(document, 'mouseup');
const mouseMove = Observable.fromEvent<MouseEvent>(document, 'mousemove');

mouseDown
  .map(event => ({ x: event.offsetX, y: event.offsetY }))
  .flatMap(offset =>
    mouseMove.takeUntil(mouseUp).map(event => ({
      x: event.clientX - offset.x,
      y: event.clientY - offset.y
    }))
  )
  .subscribe(pos => {
    dragDOM.style.left = `${pos.x}px`;
    dragDOM.style.top = `${pos.y}px`;
  });

import { fromEvent, Observable, from, defer } from 'rxjs';
import { scan, debounceTime } from 'rxjs/operators';

const subscription = fromEvent(
  document.getElementById('button1'),
  'click'
).subscribe();

fromEvent(document.getElementById('cancel'), 'click')
  .pipe(debounceTime(1000))
  .subscribe(() => {
    fetchHTML.subscribe(value => {
      console.log(value);
    });
  });

const fetchHTML = defer(() =>
  from(fetch('/').then(response => response.text()))
);

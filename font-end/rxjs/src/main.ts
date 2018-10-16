import { Observable } from 'rxjs';
import { map, scan, takeUntil, tap } from 'rxjs/operators';

const a$ = new Observable<number>(observer => {
  const timer = setInterval(() => {
    observer.next(count++);
  }, 1000);
  let count = 0;
  console.log('run...');
  return () => {
    clearInterval(timer);
    console.log('clear timer');
  };
});

a$.pipe(
  tap(value => {
    console.log(value);
  })
).subscribe();

a$.subscribe(value => console.log(value));

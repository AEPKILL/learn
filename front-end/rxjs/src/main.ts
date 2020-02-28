import { fromEvent, Observable, from, defer } from 'rxjs';
import { scan, debounceTime } from 'rxjs/operators';

from(fetch('/').then(response => response.text())).subscribe(value =>
  console.log(value)
);

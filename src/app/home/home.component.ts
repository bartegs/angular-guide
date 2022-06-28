import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;
  private secondObsSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customObservable = new Observable((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 10) {
          observer.error(new Error('count is too big'));
        }
        count++;
      }, 1000);
    });

    this.secondObsSubscription = customObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data) => {
          return 'Round: ' + (data);
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          alert(error.message);
        },
        complete: () => {
          console.log('completed');
        },
      });
  }

  ngOnDestroy() {
    this.secondObsSubscription.unsubscribe();
  }
}

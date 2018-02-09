import { Component, OnDestroy } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnDestroy {

  subscribers: any = {};

  ngOnDestroy() {
    // unsubscribing all subscribers
    for (const subscriberKey in this.subscribers) {
      const subscriber = this.subscribers[subscriberKey];
      if (subscriber instanceof Subscriber) {
        subscriber.unsubscribe();
      }
    }
  }
}

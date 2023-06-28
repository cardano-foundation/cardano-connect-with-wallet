type Observer<T> = (value: T) => void;
type Subscriber<T> = (value: T) => void;

class Observable<T> {
  observers = new Array<Observer<T>>();
  value;

  constructor(value: T) {
    this.value = value;
  }

  subscribe(subscriber: Subscriber<T>) {
    this.observers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber<T>) {
    this.observers = this.observers.filter(
      (observer) => observer !== subscriber
    );
  }

  get(): T {
    return this.value;
  }

  set(value: T): void {
    if (this.value === value) return;
    this.value = value;

    for (const observer of this.observers) {
      observer(this.value);
    }
  }
}

export { Observable };

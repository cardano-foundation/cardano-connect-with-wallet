type Observer<T> = (value: T) => void;
type Subscriber<T> = (value: T) => void;
declare class Observable<T> {
  observers: Observer<T>[];
  value: T;
  constructor(value: T);
  subscribe(subscriber: Subscriber<T>): void;
  unsubscribe(subscriber: Subscriber<T>): void;
  get(): T;
  set(value: T): void;
}
export { Observable };

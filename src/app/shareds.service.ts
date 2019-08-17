import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  private passtheValueSubject = new BehaviorSubject<any>(null);
  passtheValueObservable = this.passtheValueSubject.asObservable();
  constructor() { }
  passTheValue(value: string){
    this.passtheValueSubject.next(value);
  }
}

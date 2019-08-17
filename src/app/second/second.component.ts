import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedserviceService } from '../shareds.service';
import { SubSink } from 'subsink';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {


  subjectValue: string;
  private subs = new SubSink();
  constructor(private sharedService: SharedserviceService) { }

  ngOnInit() {
    this.subs.sink =  this.sharedService.passtheValueObservable$.subscribe((data) => {
    this.subjectValue = data;
  });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}

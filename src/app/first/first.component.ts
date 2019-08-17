import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SharedserviceService } from '../shareds.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

   textValue: string;
  constructor(private router: Router, private sharedService: SharedserviceService) { }

  ngOnInit() {
  }
  passTheValue() {
    this.sharedService.passTheValue(this.textValue);
    this.router.navigate(['/secondcomponent']);
    }
}

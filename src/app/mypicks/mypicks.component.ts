import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from '../nomination/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mypicks',
  templateUrl: './mypicks.component.html',
  styleUrls: ['./mypicks.component.css']
})
export class MypicksComponent implements OnInit {
  @Input() categories: ICategory[];

  constructor() { }

  ngOnInit() {
  }

}

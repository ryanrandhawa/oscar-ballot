import { Component, OnInit, Input } from '@angular/core';
import { NominationService } from '../nomination.service';
import { ICategory } from '../nomination/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: ICategory[];
  errorMessage: string;

  constructor() { }

  ngOnInit() {

  }

}

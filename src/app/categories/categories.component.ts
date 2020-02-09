import { Component, OnInit } from '@angular/core';
import { NominationService } from '../nomination.service';
import { ICategory } from '../nomination/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[];
  errorMessage: string;

  constructor(private nominationService: NominationService) { }

  ngOnInit() {
    this.nominationService.getCategories().subscribe({
      next: categories =>
      {
        this.categories = categories;
      },
      error: err => this.errorMessage = err
    });
  }

}

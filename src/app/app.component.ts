import { Component } from '@angular/core';
import { ICategory } from './nomination/category';
import { NominationService } from './nomination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: ICategory[];
  title = 'Oscar Ballot';
  errorMessage: string;
  currentPage = 'ballot';

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


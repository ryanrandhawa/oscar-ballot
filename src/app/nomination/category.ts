import { INomination } from './nomination';
import { Observable } from 'rxjs';

export interface ICategory {
  title: string;
  nominations: INomination[];
  selectedNominee: Observable<INomination>;
}

import { INomination } from './nomination';

export interface ICategory {
  title: string;
  nominations: INomination[];
}

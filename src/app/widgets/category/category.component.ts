import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Category } from '../../models/category';
import { CategoriesList } from '../../models/categoriesList';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  geners: any;
  categoriesList: Observable<CategoriesList>;

  constructor(
    private apiService: ApiService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.categoriesList = this.store.select('categoriesListReducer');

    this.apiService.get('category/list').subscribe(data => {
      const categoriesList: CategoriesList = new CategoriesList();

      for (const category in data) {
        categoriesList.categories.push(
          Object.assign(
            new Category(), data[category], {
              status: data[category]['Status'],
              createdAt: data[category]['CreatedAt'],
              updatedAt: data[category]['UpdatedAt'],
              deletedAt: data[category]['DeletedAt'],
              id: data[category]['ID']
            }
          )
        );
      }
    });
  }
}

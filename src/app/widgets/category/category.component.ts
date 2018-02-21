import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesList } from '../../models/categoriesList';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import { PostAPIService } from '../../services/api-routes/posts.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  geners: any;
  categoriesList: Observable<CategoriesList>;

  constructor(
    private store: Store<any>,
    private postAPIService: PostAPIService
  ) { }

  ngOnInit() {
    this.categoriesList = this.store.select('categoriesListReducer');

      this.postAPIService.getPostCategories().subscribe(data => {
      const categoriesList: CategoriesList = new CategoriesList();
      for (const category in data) {
        categoriesList.categories.push(
          Object.assign(
            new Category(), data['results'][category], {
              name: data['results'][category]['name'],
              description: data['results'][category]['description'],
            }
          )
        );
      }
    });
  }
}

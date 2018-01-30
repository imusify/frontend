import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public geners: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {

  	this.api.get('category/list').subscribe((data) => {
      this.geners = data;
  	})
  }

}

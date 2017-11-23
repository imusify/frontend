import { Component, OnInit } from '@angular/core';
import {PageActionsService} from './../../services/page-actions.service';
@Component({
  selector: 'widget-about',
  templateUrl: './about.component.html',
  styleUrls: ['./../../../assets/css/stylesAbout.css']
})
export class AboutComponent implements OnInit {

  constructor(
  	private pageAction: PageActionsService
  	) { }

  ngOnInit() {
  }

  close(e) {
  	e.preventDefault()
  	this.pageAction.setAction('close_about')
  }
}

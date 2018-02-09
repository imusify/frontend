import { Component, OnInit } from '@angular/core';
import {PageActionsService} from './../../services/page-actions.service';

@Component({
  selector: 'widget-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
  	private pageAction: PageActionsService
  ) { }

  ngOnInit() {}

  close(e) {
  	e.preventDefault()
  	this.pageAction.setAction('close_contact')
  }
}

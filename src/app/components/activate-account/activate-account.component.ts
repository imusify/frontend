import { ApiService } from './../../services/api.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit, OnDestroy, AfterViewInit {

  public loading: boolean;
  public code: any;
  public success: boolean;

  private sub: any;

  constructor(private router: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.loading = false;

    this.sub = this.router.params.subscribe(params => {
      this.code = params['code'];
    });



  }

  ngAfterViewInit() {
    setTimeout(_ => this.activateAccount());
  }

  activateAccount() {
    this.loading = true;
    this.api.activate(this.code).subscribe(data => {
      this.loading = false;
      this.success =  true;
    }, err => {
      this.loading = false;
      this.success =  false;

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

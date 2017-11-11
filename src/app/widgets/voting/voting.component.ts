import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  
  votes: number;  

  @Input() post: any;

  constructor(
  	private apiService: ApiService
  	) { }

  ngOnInit() {
    
    this.votes = this.post.votes
  }

  upvote(event) {
    event.preventDefault();
    const v = {
    	'post': this.post.post_id,
    	'up': true,
    	'down': false
    }
    this.apiService.post('post/vote', v).subscribe(
    	data => {
    		this.votes++;        
        console.log(data)
    	}, 
    	err => {
        console.log(err)
    	}
    )
    
  }

  downvote(event) {
    event.preventDefault();
   const v = {
      'post': this.post.post_id,
      'up': false,
      'down': true
    }
    this.apiService.post('post/vote', v).subscribe(
      data => {
        this.votes--;        
        console.log(data)
      }, 
      err => {
        console.log(err)
      }
    )
  }


}

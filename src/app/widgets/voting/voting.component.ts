import { Component, OnInit, Input } from '@angular/core';
import { PostAPIService } from '../../services/api-routes/posts.service';
@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  votes: number;

  @Input() post: any;

  constructor(
    private postAPIService: PostAPIService
  ) { }

  ngOnInit() {
    this.votes = this.post.votes;
  }

  upvote(event) {
    event.preventDefault();
    const v = {
    	'post': this.post.post_id,
    	'up': true,
    	'down': false
    };
    this.postAPIService.votePost(v).subscribe(data => {
    		this.votes++;
    	},
    	err => {
        console.log(err);
    	}
    );
  }

  downvote(event) {
    event.preventDefault();
    const v = {
      'post': this.post.post_id,
      'up': false,
      'down': true
    };
    this.postAPIService.votePost(v).subscribe(data => {
        this.votes--;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}

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
    const data = {
      date_created: ''
    };
    this.postAPIService.votePost(this.post.id, 'up', data).subscribe(data => {
        this.votes++;
    	},
    	err => {
        console.log(err);
    	}
    );
  }

  downvote(event) {
    event.preventDefault();
    const data = {
      date_created: ''
    };
    this.postAPIService.votePost(this.post.id, 'down', data).subscribe(data => {
        this.votes--;
      },
      err => {
        console.log(err);
      }
    );
  }
}

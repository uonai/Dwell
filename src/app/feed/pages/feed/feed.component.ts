import { Component, OnInit } from '@angular/core';
import { FeedService } from '../shared/feed-service.service';
import { FeedCardComponent } from '../../components/feed-card/feed-card.component';

// Add the RxJS Observable operators we need in this app.
import '../../../rxjs-operators';

@Component({
  selector: 'app-home',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  private feedUrl: string = 'http://www.ribbonfarm.com/feed/';
  private feeds: any;

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed(){
    this.feedService.getFeedContent(this.feedUrl)
    .subscribe(
      feed => this.feeds = feed.items,
      error => console.log(error));
  }
}

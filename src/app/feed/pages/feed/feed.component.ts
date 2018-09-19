import { Component, OnInit } from '@angular/core';
import { FeedService } from '../shared/feed-service.service';
import { FeedCardComponent } from '../../components/feed-card/feed-card.component';
import { NavigationmainComponent} from '../../../ui/navigationmain/navigationmain.component';
// import {MatSidenavModule, MatDrawerContainer} from '@angular/material/sidenav';
// Add the RxJS Observable operators we need in this app.
import '../../../rxjs-operators';

@Component({
  selector: 'app-home',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  private feedUrl: string = 'http://www.ribbonfarm.com/feed/';
  // private feedUrl2: string = 'https://feedforall.com/sample-feed.xml';
  private feeds: any;

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.refreshFeed(this.feedUrl);
  //  this.refreshFeed(this.feedUrl2);

  }

  private refreshFeed(a: any){
    const feedUrl = a;
    this.feedService.getFeedContent(feedUrl)
    .subscribe(
      feed => this.feeds = feed.items,
      error => console.log(error));
  }
}

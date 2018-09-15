import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/pages/feed/feed.component';
import { FeedCardComponent } from './feed/components/feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './ui/pipe/strip-html-tags.pipe';
import { FeedService } from './feed/pages/shared/feed-service.service';
// Material design.
import { MatCard, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationmainComponent } from './ui/navigationmain/navigationmain.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    WebviewDirective,
    FeedCardComponent,
    StripHtmlTagsPipe,
    NavigationmainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [FeedService, ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import { FirstPageComponent } from './components/first-page/first-page.component';
import {RouterModule, Routes} from '@angular/router';
import { AudioComponent } from './components/audio/audio.component';
import {AudioCounterService} from './components/audio/audio-counter.service';
import { SwiperedCardsComponentComponent } from './components/swipered-cards-component/swipered-cards-component.component';
import { SwiperedBooksComponentComponent } from './components/swipered-books-component/swipered-books-component.component';
import { MyCollectionsComponent } from './components/my-collections/my-collections.component';
import { CollectionComponent } from './components/my-collections/collection/collection.component';
import { MyRecordComponent } from './components/my-record/my-record.component';
import { MyRecordCardComponent } from './components/my-record/my-record-card/my-record-card.component';
import { WordRateComponent } from './components/my-record/word-rate/word-rate.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const appRoutes: Routes = [
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'myCollections', component: MyCollectionsComponent},
  { path: 'myRecord', component: MyRecordComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FirstPageComponent,
    AudioComponent,
    SwiperedCardsComponentComponent,
    SwiperedBooksComponentComponent,
    MyCollectionsComponent,
    CollectionComponent,
    MyRecordComponent,
    MyRecordCardComponent,
    WordRateComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    AudioCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

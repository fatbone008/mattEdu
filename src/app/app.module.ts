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


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const appRoutes: Routes = [
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'homepage', component: HomepageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FirstPageComponent,
    AudioComponent,
    SwiperedCardsComponentComponent
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

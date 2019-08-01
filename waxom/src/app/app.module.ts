import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {TabModule} from 'angular-tabs-component';
import { MobileInfoComponent } from './mobile-info/mobile-info.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PostsComponent } from './posts/posts.component';
import { ServicesComponent } from './services/services.component';
import { RealizationComponent } from './realization/realization.component';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    MobileInfoComponent,
    AchievementsComponent,
    PostsComponent,
    ServicesComponent,
    RealizationComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';

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
    PurchaseComponent,
    PartnersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    TabModule,
    AnimateOnScrollModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

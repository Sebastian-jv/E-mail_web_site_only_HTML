import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { LogoComponent } from './navbar/logo/logo.component';
import { NavComponent } from './navbar/nav/nav.component';
import { UserComponent } from './navbar/user/user.component';
import { ListComponent } from './aside/list/list.component';
import { ButtonsProgressComponent } from './aside/buttons-progress/buttons-progress.component';
import { HeadComponent } from './main/head/head.component';
import { AreaMailComponent } from './main/area-mail/area-mail.component';
import { FooterComponent } from './main/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    MainComponent,
    LogoComponent,
    NavComponent,
    UserComponent,
    ListComponent,
    ButtonsProgressComponent,
    HeadComponent,
    AreaMailComponent,
    FooterComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

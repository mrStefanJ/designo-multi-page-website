import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material components model
import { MatIconModule } from '@angular/material/icon';
import { WebDesignComponent } from './page/web-design/web-design.component';
import { AppDesignComponent } from './page/app-design/app-design.component';
import { GraphicDesignComponent } from './page/graphic-design/graphic-design.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { LocationComponent } from './page/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WebDesignComponent,
    AppDesignComponent,
    GraphicDesignComponent,
    ContactUsComponent,
    AboutUsComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

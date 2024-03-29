import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { BlogComponent } from "./blog/blog.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { PCodeComponent } from "./portfolio/p-code/p-code.component";
import { PPhotoComponent } from "./portfolio/p-photo/p-photo.component";
import { MenuComponent } from "./menu/menu.component";
import { CounterComponent } from "./portfolio/p-code/counter/counter.component";
import { WeatherComponent } from './portfolio/p-code/weather/weather.component';
import { ApiService } from "./portfolio/p-code/weather/Service/api.service";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomepageComponent,
    NavBarComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    PortfolioComponent,
    PCodeComponent,
    PPhotoComponent,
    MenuComponent,
    CounterComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

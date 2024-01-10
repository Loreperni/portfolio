import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

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
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

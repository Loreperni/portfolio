import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from "./blog/blog.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { PCodeComponent } from "./portfolio/p-code/p-code.component";
import { PPhotoComponent } from "./portfolio/p-photo/p-photo.component";
import { WeatherComponent } from "./portfolio/p-code/weather/weather.component";


const routes: Routes = [
  { path: "works/photo", component: PPhotoComponent },
  { path: "works/code", component: PCodeComponent },
  { path: "works", component: PortfolioComponent },
  { path: "blog", component: BlogComponent },
  { path: "contact", component: ContactComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

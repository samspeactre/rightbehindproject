import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { BlogCarouselComponent } from './blog-carousel/blog-carousel.component';
import { RentalCarouselComponent } from './rental-carousel/rental-carousel.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ListingsComponent } from './listings/listings.component';
import { PopupComponent } from './popup/popup.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { AddPropertyComponent } from './add-property/add-property.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'card-carousel', component: CardCarouselComponent },
  { path: 'blog-carousel', component: BlogCarouselComponent },
  { path: 'rent-carousel', component: RentalCarouselComponent },
  { path: 'property-details', component: PropertyDetailsComponent },
  { path: 'listing', component: ListingsComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'listing-page', component: ListingPageComponent },
  { path: 'add-property', component: AddPropertyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

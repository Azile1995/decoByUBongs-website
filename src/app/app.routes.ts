import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceFormComponent } from './service-form.component/service-form.component';
import { QuoteComponent } from './quote/quote.component';
import { AboutUsComponent } from './about-us/about-us.component';


export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'services', component: ServicesComponent },
{ path: 'gallery', component: GalleryComponent },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'admin/services', component: ServiceFormComponent },
{ path: 'quote', component: QuoteComponent },
{
  path: 'gallery',
  loadComponent: () =>
    import('./gallery/gallery.component')
      .then(m => m.GalleryComponent)
},
{
  path: 'contact-us',
  loadComponent: () =>
    import('./about-us/about-us.component')
      .then(m => m.AboutUsComponent)
},


{ path: '**', redirectTo: '' }
];
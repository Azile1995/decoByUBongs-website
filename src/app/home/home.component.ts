import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
selector: 'app-home',
standalone: true,
imports: [HeroComponent, AboutUsComponent, ContactUsComponent],
templateUrl: './home.component.html'
})
export class HomeComponent {}
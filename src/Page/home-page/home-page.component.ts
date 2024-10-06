import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';
import { NavbarComponent } from '../../Component/navbar/navbar.component';
import { HomeComponent } from '../../Component/home/home.component';
import { AboutComponent } from '../../Component/about/about.component';
import { BlogsComponent } from '../../Component/blogs/blogs.component';
import { OfferComponent } from '../../Component/offer/offer.component';
import { ServiceComponent } from '../../Component/service/service.component';
import { PortfolioComponent } from '../../Component/portfolio/portfolio.component';
import { FooterComponent } from '../../Component/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, HomeComponent,
    AboutComponent, BlogsComponent, OfferComponent,
    ServiceComponent, PortfolioComponent, FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}

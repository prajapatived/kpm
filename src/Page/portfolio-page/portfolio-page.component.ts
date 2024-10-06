import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';
import { NavbarComponent } from '../../Component/navbar/navbar.component';
import { PortfolioComponent } from '../../Component/portfolio/portfolio.component';
import { FooterComponent } from '../../Component/footer/footer.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, PortfolioComponent, FooterComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css'
})
export class PortfolioPageComponent {

}

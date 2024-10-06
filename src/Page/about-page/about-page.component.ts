import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';
import { NavbarComponent } from '../../Component/navbar/navbar.component';
import { FooterComponent } from '../../Component/footer/footer.component';
import { AboutComponent } from '../../Component/about/about.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, AboutComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}

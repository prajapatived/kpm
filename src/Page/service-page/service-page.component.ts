import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';
import { NavbarComponent } from '../../Component/navbar/navbar.component';
import { ServiceComponent } from '../../Component/service/service.component';
import { FooterComponent } from '../../Component/footer/footer.component';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, ServiceComponent, FooterComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {

}

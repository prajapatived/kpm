import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';
import { NavbarComponent } from '../../Component/navbar/navbar.component';
import { FooterComponent } from '../../Component/footer/footer.component';
import { BlogsComponent } from '../../Component/blogs/blogs.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, BlogsComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {

}

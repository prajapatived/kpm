import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutPageComponent } from '../Page/about-page/about-page.component';
import { BlogPageComponent } from '../Page/blog-page/blog-page.component';
import { HomePageComponent } from '../Page/home-page/home-page.component';
import { ServicePageComponent } from '../Page/service-page/service-page.component';
import { ProductsPageComponent } from '../Page/products-page/products-page.component';
import { PortfolioPageComponent } from '../Page/portfolio-page/portfolio-page.component';
import { ContactPageComponent } from '../Page/contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'service', component: ServicePageComponent},
    {path: 'product', component: ProductsPageComponent},
    {path: 'portfolio', component: PortfolioPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'contact', component: ContactPageComponent},
];

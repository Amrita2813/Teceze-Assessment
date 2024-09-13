import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./ui-components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { ServicesComponent } from "./components/services/services.component";
import { WhyUsComponent } from "./components/why-us/why-us.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { FooterComponent } from "./ui-components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,HomeComponent,ServicesComponent,WhyUsComponent,TestimonialComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teceze';
}

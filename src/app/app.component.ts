import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import AOS from 'aos';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NavbarComponent, HeroComponent, AboutComponent, ProjectsComponent, TechnologiesComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  title = 'portafolio-sekan';

  ngOnInit(): void {
   AOS.init({
    once: true, // Animación solo una vez al hacer scroll
  });
  }
}
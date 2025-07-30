import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

techs = [
    { name: 'HTML', logo: 'assets/images/html.png' },
    { name: 'CSS', logo: 'assets/images/css.png' },
    { name: 'JavaScript', logo: 'assets/images/js.png' },
    { name: 'Bootstrap', logo: 'assets/images/bootstrap.png' },
    { name: 'Git', logo: 'assets/images/git.png' },
    { name: 'GitHub', logo: 'assets/images/github.png' },
    { name: 'TypeScript', logo: 'assets/images/ts.png' },
    { name: 'Angular', logo: 'assets/images/favicon.ico' },
    { name: 'SpringBoot', logo: 'assets/images/sb.png' },
    { name: 'Java', logo: 'assets/images/java.png' },
    { name: 'PostgreSQL', logo: 'assets/images/psql.png' }
  ];
}
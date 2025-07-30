import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    constructor(private eRef: ElementRef) {}

ngAfterViewInit() {
  const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement | null;
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle && menuToggle.checked) {
        menuToggle.checked = false; // cierra el menú
      }
    });
  });
}
//  clic fuera del componente
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const toggle = document.getElementById('menu-toggle') as HTMLInputElement | null;

    if (
      toggle &&
      toggle.checked &&
      !this.eRef.nativeElement.contains(event.target)
    ) {
      toggle.checked = false;
    }
  }
}

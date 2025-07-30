import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 @ViewChild('contactFormEl') contactForm!: ElementRef<HTMLFormElement>;
  onSubmit(): void {
    if (this.contactForm?.nativeElement) {
      emailjs.sendForm('service_qt5sdik', 'template_57vvrrm', this.contactForm.nativeElement, '2xp0fvpdq76Mi6ioG')
      .then(() => {
        alert('Mensaje enviado correctamente.');
        this.contactForm.nativeElement.reset();
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un error al enviar el mensaje.');
      });
    } else {
      console.error('Formulario no encontrado.');
    }
  }
}
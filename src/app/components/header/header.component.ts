import { Component, ElementRef, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private elementRef: ElementRef) { }

  fabars = faBars
  @ViewChild('lista') lista!: ElementRef

  abrimenu() {
    const menu = this.elementRef.nativeElement.querySelector('#lista')
    const bars = this.elementRef.nativeElement.querySelector('#bars')

    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }

  }
}

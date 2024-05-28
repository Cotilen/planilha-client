import { Component, ElementRef, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  fabars = faBars
  @ViewChild('lista') lista!: ElementRef

  abrimenu(){
    console.log(this.lista);

  }



}

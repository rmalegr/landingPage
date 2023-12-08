import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title:string = 'Store Fake API'
  menuOption:string = ''
  onOption(menuOption:string){
    this.menuOption = menuOption
  }

}

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  
   standalone: true, 
   templateUrl: './app.component.html', // Path to the HTML template file
   styleUrl: './app.component.css', // Path to the CSS file
  imports: [HeaderComponent, UserComponent]
  
})
export class AppComponent {
  users = DUMMY_USERS;
}

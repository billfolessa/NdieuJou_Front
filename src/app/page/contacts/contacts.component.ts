import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.less'
})
export class ContactsComponent {

  mailto:string= "info@ndieujou.org";

}

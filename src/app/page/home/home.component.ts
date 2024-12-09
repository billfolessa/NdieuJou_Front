import { Component } from '@angular/core';
import { Card1Component } from "../../component/card1/card1.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}

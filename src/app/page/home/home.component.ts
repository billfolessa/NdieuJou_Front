import { Component } from '@angular/core';
import { Card1Component } from "../../component/card1/card1.component";
import { Card2Component } from '../../component/card2/card2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card1Component, Card2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}

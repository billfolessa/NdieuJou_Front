import { Component } from '@angular/core';
import { PropertyItemComponent } from "../../component/property-item/property-item.component";

@Component({
  selector: 'app-all-article',
  standalone: true,
  imports: [PropertyItemComponent],
  templateUrl: './all-article.component.html',
  styleUrl: './all-article.component.less'
})
export class AllArticleComponent {

}

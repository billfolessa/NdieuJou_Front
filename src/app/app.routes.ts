import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { AllArticleComponent } from './page/all-article/all-article.component';
import { FulldisplayComponent } from './page/fulldisplay/fulldisplay.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"\properties", component:AllArticleComponent},
    {path:"\contact", component:ContactsComponent},
    {path:"property/:idProperty", component:FulldisplayComponent}
];

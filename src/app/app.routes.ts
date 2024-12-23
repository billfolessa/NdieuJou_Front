import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactsComponent } from './page/contacts/contacts.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"\contact", component:ContactsComponent}
];

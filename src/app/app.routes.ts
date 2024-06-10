import { Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: 'cats',
        component: CatsComponent
    },
    {
        path: 'dogs',
        component: DogsComponent
    },
    {
        path: 'contact-us',
        component: ContactComponent
    }
];

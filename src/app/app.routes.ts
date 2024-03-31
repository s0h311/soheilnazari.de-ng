import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './pages/work/work.component';
import { ReadingListComponent } from './pages/reading-list/reading-list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
  {
    title: 'Work',
    path: 'work',
    component: WorkComponent,
  },
  {
    title: 'Blog',
    path: 'blog',
    component: BlogComponent,
  },
  {
    title: 'Reading List',
    path: 'readingList',
    component: ReadingListComponent,
  },
  {
    title: 'Contact',
    path: 'contact',
    component: ContactComponent,
  },
];

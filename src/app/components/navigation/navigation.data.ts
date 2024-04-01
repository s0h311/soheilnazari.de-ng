import { Routes } from '@angular/router';

export const links: Routes = [
  {
    title: 'Now',
    path: '/',
  },
  {
    title: 'Work',
    path: '/work',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Reading List',
    path: '/readingList',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export const socialLinks = [
  {
    icon: 'assets/github.png',
    url: 'https://github.com/s0h311',
    alt: 'Github profile',
  },
  {
    icon: 'assets/linkedin.png',
    url: 'https://www.linkedin.com/in/soheiln/',
    alt: 'Linkedin profile',
  },
];

import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  constructor(public router: Router) {}

  public links: Routes = [
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

  public socialLinks = [
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
}

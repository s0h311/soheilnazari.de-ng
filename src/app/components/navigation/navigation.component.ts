import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { Router, RouterModule, Routes } from '@angular/router'
import { links, socialLinks } from './navigation.data'
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  constructor(public router: Router) {}

  public links: Routes = links
  public socialLinks = socialLinks
}

import { NgOptimizedImage } from '@angular/common'
import { Component, signal } from '@angular/core'
import { Router, RouterModule, Routes } from '@angular/router'
import { links, socialLinks } from '../navigation/navigation.data'

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './mobile-sidebar.component.html',
})
export class MobileSidebarComponent {
  constructor(public router: Router) {}

  public showSidebar = signal<boolean>(false)

  public links: Routes = links
  public socialLinks = socialLinks
}

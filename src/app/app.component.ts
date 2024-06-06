import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { NavigationComponent } from './components/navigation/navigation.component'
import { CommonModule } from '@angular/common'
import { DeviceTypeService } from './services/device-type.service'
import { MobileSidebarComponent } from './components/mobile-sidebar/mobile-sidebar.component'
import { inject } from '@vercel/analytics'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    RouterLink,
    MobileSidebarComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public deviceTypeService: DeviceTypeService) {
    inject()
  }
}

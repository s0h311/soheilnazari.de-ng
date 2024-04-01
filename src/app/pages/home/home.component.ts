import { Component, computed } from '@angular/core';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

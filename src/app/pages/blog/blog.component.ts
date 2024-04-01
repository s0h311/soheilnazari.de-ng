import { Component } from '@angular/core';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent {}

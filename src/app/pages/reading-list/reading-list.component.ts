import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-reading-list',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './reading-list.component.html',
})
export class ReadingListComponent {}

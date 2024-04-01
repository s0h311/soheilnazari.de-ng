import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './work.component.html',
})
export class WorkComponent {}

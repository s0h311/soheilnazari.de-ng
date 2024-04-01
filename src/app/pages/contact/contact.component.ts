import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ReclaimComponent } from '../../components/reclaim/reclaim.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MarkdownModule, ReclaimComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {}

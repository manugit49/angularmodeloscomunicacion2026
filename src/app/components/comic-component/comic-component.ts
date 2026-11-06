import { Component, Input } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-component',
  standalone: false,
  styleUrl: './comic-component.css',
  templateUrl: './comic-component.html',
})
export class ComicComponent {
  @Input() comic!: Comic;
}

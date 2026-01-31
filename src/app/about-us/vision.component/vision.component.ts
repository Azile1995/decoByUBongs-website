import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

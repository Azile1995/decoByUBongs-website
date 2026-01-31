import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  imports: [CommonModule],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

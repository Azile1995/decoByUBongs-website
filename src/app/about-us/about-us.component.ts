import { Component } from '@angular/core';
import { TeamComponent } from './team/team.component';
import { VisionComponent } from './vision.component/vision.component';
import { MissionComponent } from './mission/mission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MissionComponent,
    VisionComponent,
    TeamComponent
  ]
})
export class AboutUsComponent { }


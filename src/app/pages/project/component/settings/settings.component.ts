import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Input() projectName!: string;
  @Input() projectDescription!: string;

  ngOnInit(): void {
  }

  deleteProject() {

  }
}

import {Component, OnInit} from '@angular/core';
import {dashboard} from '../classes/dashboard';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PictureComponent} from '../modals/picture/picture.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})

export class DashboardComponent implements OnInit {
  pictureDialog: MatDialogRef<PictureComponent> | undefined;

  constructor(public matDialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  dashboard = new dashboard();


  clickDoor(door: string) {
    switch (door) {
      case 'TopLeft': {
        this.dashboard.door_TopLeft = !this.dashboard.door_TopLeft;
        break;
      }
      case 'BottomLeft': {
        this.dashboard.door_BottomLeft = !this.dashboard.door_BottomLeft;
        break;
      }
      case 'TopMiddle': {
        this.dashboard.door_TopMiddle = !this.dashboard.door_TopMiddle;
        break;
      }
      case 'BottomMiddle': {
        this.dashboard.door_BottomMiddle = !this.dashboard.door_BottomMiddle;
        break;
      }
      case 'Right': {
        this.dashboard.door_Right = !this.dashboard.door_Right;
        break;
      }
    }
  }


  turnLight(light: string) {
    switch (light) {
      case 'TopLeft': {
        this.dashboard.light_TopLeft = !this.dashboard.light_TopLeft;
        break;
      }
      case 'BottomLeft': {
        this.dashboard.light_BottomLeft = !this.dashboard.light_BottomLeft;
        break;
      }
      case 'TopMiddle': {
        this.dashboard.light_TopMiddle = !this.dashboard.light_TopMiddle;
        break;
      }
      case 'BottomMiddle': {
        this.dashboard.light_BottomMiddle = !this.dashboard.light_BottomMiddle;
        break;
      }
      case 'Right': {
        this.dashboard.light_Right = !this.dashboard.light_Right;
        break;
      }
    }
  }

  shootPic(): void {
    this.pictureDialog = this.matDialog.open(PictureComponent);
  }

  turn_allLigths(value: boolean) {
    this.dashboard.all_lights = value;
    this.dashboard.light_TopLeft = value;
    this.dashboard.light_TopMiddle = value;
    this.dashboard.light_BottomLeft = value;
    this.dashboard.light_BottomMiddle = value;
    this.dashboard.light_Right = value;
  }

  turn_allDoors(value: boolean) {
    this.dashboard.all_doors = value;
    this.dashboard.door_TopLeft = value;
    this.dashboard.door_TopMiddle = value;
    this.dashboard.door_BottomLeft = value;
    this.dashboard.door_BottomMiddle = value;
    this.dashboard.door_Right = value;
  }

}

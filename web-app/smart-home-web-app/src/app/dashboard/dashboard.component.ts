import { Component, OnInit } from '@angular/core';
import { dashboard } from '../classes/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dashboard = new dashboard();
  
  

  clickDoor_TopLeft() {

    this.dashboard.door_TopLeft = !this.dashboard.door_TopLeft
  }

  clickDoor_BottomLeft() {
    this.dashboard.door_BottomLeft = !this.dashboard.door_BottomLeft
  }

  clickDoor_TopMiddle() {
    this.dashboard.door_TopMiddle = !this.dashboard.door_TopMiddle
  }

  clickDoor_BottomMiddle() {
    this.dashboard.door_BottomMiddle = !this.dashboard.door_BottomMiddle
  }

  clickDoor_Right() {
    this.dashboard.door_Right = !this.dashboard.door_Right
  }

  turnLight_TopLeft() {
    this.dashboard.light_TopLeft = !this.dashboard.light_TopLeft
  }

  turnLight_BottomLeft() {
    this.dashboard.light_BottomLeft = !this.dashboard.light_BottomLeft
  }

  turnLight_TopMiddle() {
    this.dashboard.light_TopMiddle = !this.dashboard.light_TopMiddle
  }

  turnLight_BottomMiddle() {
    this.dashboard.light_BottomMiddle = !this.dashboard.light_BottomMiddle
  }

  turnLight_Right() {
    this.dashboard.light_Right = !this.dashboard.light_Right
  }

}

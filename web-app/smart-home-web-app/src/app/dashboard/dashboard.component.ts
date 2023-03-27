import {Component, OnInit} from '@angular/core';
import {dashboard} from '../classes/dashboard';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PictureComponent} from '../modals/picture/picture.component';
import {HttpService} from '../_services/http.service';
import {interval, Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})

export class DashboardComponent implements OnInit {
  pictureDialog: MatDialogRef<PictureComponent> | undefined;

  constructor(public matDialog: MatDialog, public httpService: HttpService) {
  }

  ngOnInit(): void {
    interval(1000).subscribe(x => {
      this.getDoors();
    });
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
        if (this.dashboard.light_TopLeft){
          this.httpService.put_api('lights', {idRoom: 'r1', action: 1}).subscribe((res: any) => {
            console.log(res);
          });
        }
        else{
          this.httpService.put_api('lights', {idRoom: 'r1', action: 0}).subscribe((res: any) => {
            console.log(res);
          });
        }
        break;
      }
      case 'BottomLeft': {
        this.dashboard.light_BottomLeft = !this.dashboard.light_BottomLeft;
        if (this.dashboard.light_BottomLeft){
          this.httpService.put_api('lights', {idRoom: 'r2', action: 1}).subscribe((res: any) => {
            console.log(res);
          });
        }
        else{
          this.httpService.put_api('lights', {idRoom: 'r2', action: 0}).subscribe((res: any) => {
            console.log(res);
          });
        }
        break;
      }
      case 'TopMiddle': {
        this.dashboard.light_TopMiddle = !this.dashboard.light_TopMiddle;
        if (this.dashboard.light_TopMiddle){
          this.httpService.put_api('lights', {idRoom: 'r3', action: 1}).subscribe((res: any) => {
            console.log(res);
          });
        }
        else{
          this.httpService.put_api('lights', {idRoom: 'r3', action: 0}).subscribe((res: any) => {
            console.log(res);
          });
        }
        break;
      }
      case 'BottomMiddle': {
        this.dashboard.light_BottomMiddle = !this.dashboard.light_BottomMiddle;
        if (this.dashboard.light_BottomMiddle){
          this.httpService.put_api('lights', {idRoom: 'r4', action: 1}).subscribe((res: any) => {
            console.log(res);
          });
        }
        else{
          this.httpService.put_api('lights', {idRoom: 'r4', action: 0}).subscribe((res: any) => {
            console.log(res);
          });
        }
        break;
      }
      case 'Right': {
        this.dashboard.light_Right = !this.dashboard.light_Right;
        if (this.dashboard.light_Right){
          this.httpService.put_api('lights', {idRoom: 'r5', action: 1}).subscribe((res: any) => {
            console.log(res);
          });
        }
        else{
          this.httpService.put_api('lights', {idRoom: 'r5', action: 0}).subscribe((res: any) => {
            console.log(res);
          });
        }
        break;
      }
    }
  }

  shootPic(): void {
    this.pictureDialog = this.matDialog.open(PictureComponent);
  }
  getDoors(): void{
    this.httpService.get_api('doors').subscribe((res: any) => {
        this.dashboard.door_TopLeft = res.d1 === 1;
        this.dashboard.door_BottomLeft = res.d2 === 1;
        this.dashboard.door_TopMiddle = res.d3 === 1;
        this.dashboard.door_BottomMiddle = res.d4 === 1;
        console.log(res);
      }
    );
  }

  turn_allLigths(value: boolean): void {
    this.dashboard.all_lights = value;
    this.dashboard.light_TopLeft = value;
    this.dashboard.light_TopMiddle = value;
    this.dashboard.light_BottomLeft = value;
    this.dashboard.light_BottomMiddle = value;
    this.dashboard.light_Right = value;
    if (value){
      this.httpService.get_api_id('allLigths', '1').subscribe((res: any) => {
        console.log(res);
      });
    }
    else{
      this.httpService.get_api_id('allLigths', '0').subscribe((res: any) => {
        console.log(res);
      });
    }
  }

}

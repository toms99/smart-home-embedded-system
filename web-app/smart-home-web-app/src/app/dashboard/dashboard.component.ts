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

  constructor(public matDialog: MatDialog, public httpService: HttpService) {
  }
  pictureDialog: MatDialogRef<PictureComponent> | undefined;

  dashboard = new dashboard();
  distance = 'No hay Presencia';
  modalClosed = true;

  ngOnInit(): void {
    interval(1000).subscribe(x => {
      this.getDistance();
    });
  }
  shootPic(): void {
    this.pictureDialog = this.matDialog.open(PictureComponent);
  }

  getDistance(): void{
    this.httpService.get_api('doors').subscribe((res: any) => {
      if (res === 1){
        this.distance = 'Presencia Detectada';
        if (this.modalClosed){
          this.shootPic();
          this.modalClosed = false;
        }
      }
      else{
        this.distance = 'No hay Presencia';
        this.modalClosed = true;
      }
    });
  }

}

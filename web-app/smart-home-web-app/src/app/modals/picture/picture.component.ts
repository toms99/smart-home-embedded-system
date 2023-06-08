import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {HttpService} from '../../_services/http.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  imgSrc = '';

  constructor(public dialogRef: MatDialogRef<PictureComponent>, public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get_api('photo').subscribe((res: any) => {
        this.imgSrc = 'data:image/jpeg;base64,' + res.photo;
        console.log(this.imgSrc);
      }
    );
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}

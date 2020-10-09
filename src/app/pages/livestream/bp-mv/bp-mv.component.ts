import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-bp-mv',
  templateUrl: './bp-mv.component.html',
  styleUrls: ['./bp-mv.component.scss']
})
export class BpMvComponent implements OnInit {

   datas:any;
   dateTime: any;

  constructor(
     private dataService: DataService
  ) { }

  ngOnInit(): void {

   this.dataService.getData().subscribe(
      (response: any) => {
         
         this.datas = response.datas;
         this.dateTime = response.date;
         console.log(this.datas);
      }
   );
  }

}

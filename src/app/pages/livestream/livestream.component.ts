import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.scss']
})
export class LivestreamComponent implements OnInit {
   
   datas: any;
   dateTime: any;

  constructor(
     private dataService: DataService
  ) { }  

  ngOnInit() {

      this.dataService.getData().subscribe(
         (response: any) => {
            
            this.datas = response.datas;
            this.dateTime = response.date;
            console.log(this.datas);
         }
      );
      
  }

}

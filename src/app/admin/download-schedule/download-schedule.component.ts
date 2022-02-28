import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ExcelDownloadService} from "./excel-download.service";

@Component({
  selector: 'app-download-schedule',
  templateUrl: './download-schedule.component.html',
  styleUrls: ['./download-schedule.component.css']
})
export class DownloadScheduleComponent implements OnInit {

  title = 'excel-upload-download';
  ngOnInit(){
  }
  excel=[];
  constructor(private excelService: ExcelDownloadService, private http: HttpClient) {
    this.getJSON().subscribe(data => {

      // @ts-ignore
      data.forEach(row => this.excel.push(row));
    });
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.excel, 'sample');
  }
  public getJSON(): Observable<any> {
    return this.http.get('https://google.com');
  }
}

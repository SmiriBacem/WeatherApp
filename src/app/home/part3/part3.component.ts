import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../weather.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css']
})
export class Part3Component implements OnInit {

  constructor(private weather:WeatherService,private sanitizer:DomSanitizer) { }
  file;
  ngOnInit() {
    this.weather.getdate().subscribe((data:any)=>{
      this.file=data;
    })
  }

}

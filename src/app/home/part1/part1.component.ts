import { Component, OnInit, Input } from '@angular/core';
import {  WeatherService } from './../../weather.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  @Input() zebi:any;
  file;
  location="tunis";
  x;
  Url;
  Url1;
  constructor(private weather:WeatherService,private sanitizer:DomSanitizer) { }

  ngOnInit() {
      this.file=this.zebi;
  }

}

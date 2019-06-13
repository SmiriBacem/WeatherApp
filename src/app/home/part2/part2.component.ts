import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from './../../weather.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {
  @Output() fonction=new EventEmitter<any>();
  file;
  Url;
  Url1;
  x;
  location;
  constructor(private weather:WeatherService,private sanitizer:DomSanitizer) {}

  ngOnInit() {
    this.weather.getcoord("tunis").subscribe((data:any)=>{
      this.file=data;
      this.x=this.file.coord;
      this.Url="https://www.ventusky.com/?p="+this.x.lat +";" +this.x.lon+";9&l=temperature-2m"
      this.Url1=this.sanitizer.bypassSecurityTrustResourceUrl(this.Url)
      this.fonction.emit(this.file);
    })
  }
  myClickFunction(){
    this.weather.getcoord(this.location).subscribe((data:any)=>{
      this.file=data;
      this.x=this.file.coord;
      this.Url="https://www.ventusky.com/?p="+this.x.lat +";" +this.x.lon+";9&l=temperature-2m"
      this.Url1=this.sanitizer.bypassSecurityTrustResourceUrl(this.Url)
      this.fonction.emit(this.file);
    })
  }

}

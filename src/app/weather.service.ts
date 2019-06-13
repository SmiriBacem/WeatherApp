import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getcoord(city){
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=0dc7656fa5dca1d8072b4a9f189448c9");
  }
  getdate(){
    return this.http.get("http://worldclockapi.com/api/json/utc/now");
  }
}

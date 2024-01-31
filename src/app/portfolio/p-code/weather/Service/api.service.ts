import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

//TODO: add multilingual support
@Injectable({
  providedIn: "root",
})
export class ApiService {
  private API_KEY = "fda55d80a563027c27e9fd511002ea24";
  private API_URL = "https://api.openweathermap.org/data/2.5";

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(
      `${this.API_URL}/weather?q=${city}&appid=${this.API_KEY}&units=metric`
    );
  }

  getForecast(city: string) {
    return this.http.get(
      `${this.API_URL}/forecast?q=${city}&appid=${this.API_KEY}&units=metric`
    );
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiKey = "fda55d80a563027c27e9fd511002ea24";
  private baseUrl = "https://api.openweathermap.org/data/2.5";

  constructor(private http: HttpClient) {}

  getWeather(location: string) {
    const url = `${this.baseUrl}/weather?q=${location}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}

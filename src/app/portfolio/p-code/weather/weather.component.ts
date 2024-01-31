import { Component } from "@angular/core";
import { ApiService } from "src/app/portfolio/p-code/weather/Service/api.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent {
  city: string = "";
  weather: any = null;
  forecast: any = null;
  showForecastButton: boolean = false;
  showTemperatureButton: boolean = false;
  isCelsius: boolean = true;
  showWeatherButton: boolean = true;

  constructor(private api: ApiService, private datePipe: DatePipe) {}

  convertToTime(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return this.datePipe.transform(date, "shortTime");
  }

  getWeather() {
    this.api.getWeather(this.city).subscribe((data) => {
      this.weather = data;
      this.showForecastButton = true;
      this.showTemperatureButton = true;
      this.showWeatherButton = false;
    });
  }
  getForecast() {
    this.api.getForecast(this.city).subscribe((data) => {
      this.forecast = data;
      this.weather = null;
      this.showForecastButton = false;
      this.showWeatherButton = true;
    });
  }
  toggleTemperatureUnit() {
    this.isCelsius = !this.isCelsius;
  }

  convertToFahrenheit(celsius: number) {
    return ((celsius * 9) / 5 + 32).toFixed(1);
  }

  getWeatherIcon() {
    if (this.weather) {
      const weatherCondition = this.weather.weather[0].main.toLowerCase();
      switch (weatherCondition) {
        case "clear":
          return "fas fa-sun";
        case "clouds":
          return "fas fa-cloud";
        case "rain":
          return "fas fa-cloud-rain";
        // Aggiungi altri casi per altre condizioni meteorologiche
        default:
          return "fas fa-sun";
      }
    }
    return "";
  }
}

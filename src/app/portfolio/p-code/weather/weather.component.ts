import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../../assets/Service/api.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  weather: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  searchWeather(location: string) {
    this.apiService.getWeather(location).subscribe((data) => {
      this.weather = data;
    });
  }
}

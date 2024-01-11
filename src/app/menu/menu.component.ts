import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
  animations: [
    trigger("hamburguerX", [
      state("hamburguer", style({})),
      // style top bar to create the X
      state(
        "topX",
        style({
          transform: "rotate(180deg)",
          transformOrigin: "center",
          margin: "0px",
        })
      ),
      transition("* => *", [
        animate("0.4s"), // controls animation speed
      ]),
    ]),
  ],
})
export class MenuComponent {
  isHamburguer = true;
  onClick() {
    this.isHamburguer = !this.isHamburguer;
  }
}

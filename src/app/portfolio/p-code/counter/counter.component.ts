import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent implements OnInit {
  private count = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const buttonLeft = this.renderer.createElement("button");
    const containerDiv = this.renderer.createElement("div");
    const counter = this.renderer.createElement("h2");
    const resetButton = this.renderer.createElement("h2");
    const buttonRight = this.renderer.createElement("button");

    buttonLeft.textContent = " - ";
    buttonLeft.id = "buttonLeft";

    containerDiv.id = "containerDiv";

    counter.id = "counter";

    resetButton.textContent = " RESET ";
    resetButton.setAttribute("role", "button");
    resetButton.id = "resetButton";

    buttonRight.textContent = " + ";
    buttonRight.id = "buttonRight";

    this.renderer.appendChild(this.el.nativeElement, buttonLeft);
    this.renderer.appendChild(this.el.nativeElement, containerDiv);
    this.renderer.appendChild(containerDiv, counter);
    this.renderer.appendChild(containerDiv, resetButton);
    this.renderer.appendChild(this.el.nativeElement, buttonRight);

    counter.textContent = this.count.toString();

    this.renderer.listen(buttonRight, "click", () => {
      this.count++;
      counter.textContent = this.count.toString();
    });

    this.renderer.listen(buttonLeft, "click", () => {
      this.count--;
      counter.textContent = this.count.toString();
    });

    this.renderer.listen(resetButton, "click", () => {
      this.count = 0;
      counter.textContent = this.count.toString();
    });
  }
}

import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Output } from "@angular/core";
import { generateColor } from "./functions/color-generator.function";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("openClose", [
        state("true", style({ 
            height: "10%", 
            boxShadow: "0px 0px 20px 10px rgba(34, 60, 80, 0.25)"
        })),
        state("false", style({ height: "0px"})),
        transition("false <=> true", animate(500))
      ])
  ],
})
export class AppComponent implements OnInit {

    @Output() public currentColor = "";

    public streak = 0;

    public message = "";

    constructor(private cdr: ChangeDetectorRef){}

    public ngOnInit(): void {
        this.currentColor = generateColor();
        console.log(this.currentColor);
        console.log(typeof(this.currentColor));
        this.cdr.detectChanges();
    }

    public nextColor(answerResult: boolean): void {
        if(answerResult){
            this.message = `Correct`;
            this.currentColor = generateColor();
            this.streak++;
        } else{
            this.message = `Incorrect`;
            this.streak = 0;
        }
        console.log(this.currentColor);
        this.cdr.detectChanges();
    }

}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Output } from "@angular/core";
import { generateColor } from "./functions/color-generator.function";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

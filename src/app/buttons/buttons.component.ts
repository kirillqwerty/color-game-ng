import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { generateColor } from "../functions/color-generator.function";
import { shuffle } from "../functions/shuffle.function";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsComponent implements OnInit {

    @Input() public correctColor = "";

    @Output() public correctAnswer = new EventEmitter<boolean>();

    public colorSet: string[] = [];

    constructor(private cdr: ChangeDetectorRef){}

    public ngOnInit(): void {
        console.log(this.colorSet);
        
        this.setColors();
        this.cdr.detectChanges();
    }

    public setColors(): void {
        this.colorSet = [];
        console.log(this.correctColor);
        for (let index = 0; index < 2; index++) {
            this.colorSet.push(generateColor());
        }
        this.colorSet.push(this.correctColor);
        this.colorSet = shuffle(this.colorSet);
        this.cdr.detectChanges();
    }

    public checkAnswer(color: string): void {

        setTimeout(() => {
            if (color === this.correctColor) {
                console.log("match");
                this.correctAnswer.emit(true);  
                this.setColors();
            } else{
                console.log("miss");
                this.correctAnswer.emit(false);
            }
        }, 70);
        
        // this.correctColor = "";
        this.cdr.detectChanges();
    }

}

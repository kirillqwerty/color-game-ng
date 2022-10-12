import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { GameService } from "../services/game.service";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"],
})
export class ButtonsComponent implements OnInit {

    public answers?: Subject<string[]>;

    constructor(private gameService: GameService){}

    public ngOnInit(): void {
        this.answers = this.gameService.answers;
    }

    public changeColors(answer: string): void {
        console.log("click")
        this.gameService.setAnswers(answer);
    }
}

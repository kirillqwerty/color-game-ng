import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { GameService } from "../services/game.service";

@Component({
  selector: "app-screen",
  templateUrl: "./screen.component.html",
  styleUrls: ["./screen.component.scss"],
})
export class ScreenComponent implements OnInit {

    public currentColor$?: Observable<string>;

    public streak$?: Observable<number>;

    constructor(private gameService: GameService){}

    public ngOnInit(): void {
        this.currentColor$ = this.gameService.currentColor;
        this.streak$ = this.gameService.streakStream;
    }
}

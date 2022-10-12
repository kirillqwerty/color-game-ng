import { Component, OnInit} from "@angular/core";
import { Subject } from "rxjs";
import { GameService } from "./services/game.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {

    public message?: Subject<string>;

    constructor(private gameService: GameService){}

    public ngOnInit(): void {
        this.message = this.gameService.message;
    }

}

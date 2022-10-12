import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { generateColor } from "../functions/color-generator.function";
import { shuffle } from "../functions/shuffle.function";

@Injectable({
    providedIn: "root"
})
export class GameService {
    public currentColor = new BehaviorSubject<string>(generateColor())

    public answers = new BehaviorSubject<string[]>(shuffle([this.currentColor.value,generateColor(),generateColor()]))

    public streak = 0;
    public streakStream = new Subject<number>(); 

    public message = new Subject<string>(); 

    public setAnswers(answer: string): void {
        if(this.currentColor.value === answer){
            this.streak++;
            this.message.next("Correct");
            console.log("match");
        } else {
            this.message.next("Incorrect");
            this.streak = 0;
        }
        this.streakStream.next(this.streak);
        this.currentColor.next(generateColor());

        this.answers.next(shuffle([this.currentColor.value,generateColor(),generateColor()]));
    }
}

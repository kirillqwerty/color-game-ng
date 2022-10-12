import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { generateColor } from "../functions/color-generator.function";
import { shuffle } from "../functions/shuffle.function";
import { Status } from "../types/game-state.type";

@Injectable({
    providedIn: "root"
})
export class GameService {

    private _startColor = generateColor();

    private _status: Status = {
        currentColor$$: new BehaviorSubject<string>(this._startColor),
        answers$$: new BehaviorSubject<string[]>(shuffle([this._startColor, generateColor(), generateColor()])),
        streakStream$$: new BehaviorSubject<number>(0),
        message$$: new Subject<string>()
    }

    public get currentColor(): Observable<string> {
        return this._status.currentColor$$.asObservable();
    }

    public get answers(): Observable<string[]> {
        return this._status.answers$$.asObservable();
    }

    public get streakStream(): Observable<number> {
        return this._status.streakStream$$.asObservable();
    }

    public get message(): Observable<string> {
        return this._status.message$$.asObservable();
    }

    public setAnswers(answer: string): void {

        if(this._status.currentColor$$.value === answer){
            this._status.streakStream$$.next(this._status.streakStream$$.value + 1);
            this._status.message$$.next("Correct");
        } else {
            this._status.message$$.next("Incorrect");
            this._status.streakStream$$.next(0);
        }
        this._status.currentColor$$.next(generateColor());

        this._status.answers$$.next(shuffle([this._status.currentColor$$.value,generateColor(),generateColor()]));
    }
}

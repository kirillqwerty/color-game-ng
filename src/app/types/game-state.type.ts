import { BehaviorSubject, Subject } from "rxjs"

export type Status = {
    currentColor$$: BehaviorSubject<string>;
    answers$$: BehaviorSubject<string[]>;
    streakStream$$: BehaviorSubject<number>;
    message$$: Subject<string>;
}
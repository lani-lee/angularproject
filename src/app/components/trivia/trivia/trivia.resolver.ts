import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { TriviaQuestionService } from "../../../api/trivia-question/trivia-question.service"
import { first, Observable, of } from "rxjs"
import { Injectable } from "@angular/core"

@Injectable({ providedIn: 'root' })
export class TriviaResolver implements Resolve<boolean> {
  constructor(private readonly triviaQuestionService: TriviaQuestionService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.triviaQuestionService.get().pipe(first()).subscribe()
    return of(true)
  }
}

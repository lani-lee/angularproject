import { Injectable } from "@angular/core"
import { TriviaQuestionStore } from "./trivia-question.store"
import { HttpClient } from "@angular/common/http"
import { TriviaQuestion } from "./trivia-question.model"
import { tap } from "rxjs"

@Injectable({ providedIn: 'root' })
export class TriviaQuestionService {
  readonly path = 'https://jservice.io/api/random'

  constructor(private triviaQuestionStore: TriviaQuestionStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<TriviaQuestion[]>(this.path).pipe(
      tap((triviaQuestion) => {
        this.triviaQuestionStore.set(triviaQuestion)
      })
    )
  }


}

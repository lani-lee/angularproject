import { Injectable } from "@angular/core"
import { QueryEntity } from "@datorama/akita"
import { TriviaQuestionState, TriviaQuestionStore } from "./trivia-question.store"

@Injectable({ providedIn: 'root' })
export class TriviaQuestionQuery extends QueryEntity<TriviaQuestionState> {

  // why override?
  constructor(protected override store: TriviaQuestionStore) {
    super(store)
  }

}

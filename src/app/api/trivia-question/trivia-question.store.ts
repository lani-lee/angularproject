import { Injectable } from "@angular/core"
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita"
import { TriviaQuestion } from "./trivia-question.model"

export interface TriviaQuestionState extends EntityState<TriviaQuestion> {
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'trivia-question' })
export class TriviaQuestionStore extends EntityStore<TriviaQuestionState> {
  constructor() {
    super()
  }
}

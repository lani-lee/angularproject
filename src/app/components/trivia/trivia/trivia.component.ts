import { Component, OnInit } from '@angular/core'
import { TriviaQuestionQuery } from '../../../api/trivia-question/trivia-question.query'
import { tap } from 'rxjs'
import { TriviaQuestion } from '../../../api/trivia-question/trivia-question.model'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  question: TriviaQuestion

  questions$ = this.triviaQuery.selectAll().pipe(
    tap((questions) => {
      this.question = questions[0]
      console.log(this.question)
    })
  ).subscribe()


  answer = new FormControl('')
  showCorrect = false
  showIncorrect = false


  constructor(private readonly triviaQuery: TriviaQuestionQuery) {
  }

  ngOnInit(): void {

  }

  submit() {
    this.showCorrect = false
    this.showIncorrect = false
    this.question.answer === this.answer.value ? this.showCorrect = true : this.showIncorrect = true
  }


}

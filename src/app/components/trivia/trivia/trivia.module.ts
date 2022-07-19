import { NgModule } from "@angular/core"
import { TriviaComponent } from "./trivia.component"
import { CommonModule } from "@angular/common"
import { MatCardModule } from '@angular/material/card'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    TriviaComponent
  ],
  exports: [
    TriviaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class TriviaModule {
}

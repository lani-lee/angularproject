import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TriviaResolver } from "./components/trivia/trivia/trivia.resolver";
import { TriviaComponent } from "./components/trivia/trivia/trivia.component";
import { HomepageComponent } from './components/homepage/homepage.component'

const routes: Routes = [
  {
  path: 'trivia',
  resolve: [TriviaResolver],
  component: TriviaComponent
  },
  {
    path: '**',
    component: HomepageComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './flash-app/main-page/user/user.component';
import { SubPageComponent } from './flash-app/main-page/sub-page/sub-page.component';
import { StudyComponent } from './flash-app/main-page/sub-page/study/study.component';
import { DeckComponent } from './flash-app/main-page/sub-page/deck/deck.component';
import { FlashcardComponent } from './flash-app/main-page/sub-page/flashcard/flashcard.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: UserComponent},
  { path: 'home' , component: SubPageComponent ,
  children:[
    {path: '', redirectTo: 'study', pathMatch: 'full'},
    { path: 'study', component: StudyComponent},
    { path: 'deck', component: DeckComponent},
    { path: 'flashcard', component: FlashcardComponent},

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
